AxFunctionExtensionsFormBuilderCustomFields.prototype.checkboxes = function(
  name,
  options
) {

  var a = this.axFunction.tags;
  var x = this.axFunction.extensions;
  var f = this.formBuilder;

  name = f.lib.fieldNameForCollection( name );
  options.value = f.lib.fieldValueForCollection( options.value );
  options.collection = f.lib.fieldCollectionFrom( options.collection || { "on": "On" } );

  var components = options.collection.map( function( checkbox, i ) {

    var checkOptions = options.check || {};
    if ( typeof checkOptions === "function" ) {
      checkOptions = checkOptions( checkbox, i, options.collection )
    };

    var labelOptions;

    if ( checkOptions.label === false ) {
      labelOptions = { attributes: { $text: false } };
    } else if ( checkOptions.label === undefined ) {
        labelOptions = { attributes: { $text: checkbox[1] } };
    } else if ( typeof checkOptions.label === "string" ) {
        labelOptions = { attributes: { $text: checkOptions.label } };
    } else {
      labelOptions = { attributes: Object.assign(
        { $text: checkbox[1] },
        checkOptions.label
      ) };
    };
    labelOptions.layout = checkOptions.layout || "check";
    labelOptions.innerwrapper = checkOptions.innerwrapper;
    labelOptions.leftwrapper = checkOptions.leftwrapper;
    labelOptions.rightwrapper = checkOptions.rightwrapper;
    labelOptions.help = checkOptions.help;
    labelOptions.hint = checkOptions.hint;

    checkInputOptions = {
      value: x.lib.arrayIncludes( options.value, checkbox[0] ) ? checkbox[0] : "",
      checked: checkbox[0],
      required: checkOptions.required,
      readonly: checkOptions.readonly,
      disabled: checkOptions.disabled,
      invalid: checkOptions.invalid,
    };

    checkInputOptions.attributes =  Object.assign(
      {
        $dependentValue: function () {
          return this.closest("checkboxes").$dependentValue();
        },
      },
      checkOptions.input || {}
    );

    var check = f.check( name, checkInputOptions );
    var outerwrapperOptions = {
      label: labelOptions,
      attributes: checkOptions.outerwrapper
    };

    return a.checkbox( f.outerwrapper( check, outerwrapperOptions ) );

  } );

  return a.checkboxes( components, {

    $labelOnclick: function (e) {
      if ( e.target.closest("checkbox") ) {
        return true;
      } else {
        var first = this.querySelectorAll("checkboxes input:enabled")[0];
        first && first.focus();
        return false;
      };
    },

    $dependentValue: function() {
      result = [];
      var checked = this.querySelectorAll('input:checked');
      for ( var i in checked ) {
        result.push( checked[i].value );
      };
      return result.join(" ");
    },

  } );

};
