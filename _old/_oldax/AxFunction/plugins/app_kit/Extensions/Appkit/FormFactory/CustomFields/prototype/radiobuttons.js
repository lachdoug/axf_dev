AxFunction.Extensions.Appkit.FormFactory.CustomFields.prototype.radiobuttons = function(
  name,
  options={}
) {

  var a = this.axFunction.tags;
  var x = this.axFunction.extensions;
  var f = this.factory;

  options.collection = f.lib.fieldCollectionFrom( options.collection || { "on": "On" } );

  var components = options.collection.map( function( radiobutton, i ) {

    var checkOptions = options.check || {};
    if ( typeof checkOptions === "function" ) {
      checkOptions = checkOptions( radiobutton, i, options.collection )
    };

    var labelOptions;

    if ( checkOptions.label === false ) {
      labelOptions = { attributes: { $text: false } };
    } else if ( checkOptions.label === undefined ) {
        labelOptions = { attributes: { $text: radiobutton[1] } };
    } else if ( typeof checkOptions.label === "string" ) {
        labelOptions = { attributes: { $text: checkOptions.label } };
    } else {
      labelOptions = { attributes: Object.assign(
        { $text: radiobutton[1] },
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
      value: options.value,
      checked: radiobutton[0],
      type: "radio",
      required: checkOptions.required,
      readonly: checkOptions.readonly,
      disabled: checkOptions.disabled,
      invalid: checkOptions.invalid,
    };

    checkInputOptions.attributes =  Object.assign(
      {
        $dependentValue: function () {
          return this.closest("radiobuttons").$dependentValue();
        },
      },
      checkOptions.input || {}
    );

    var check = f.check( name, checkInputOptions );
    var outerwrapperOptions = {
      label: labelOptions,
      attributes: checkOptions.outerwrapper
    };

    return a.radiobutton( f.outerwrapper( check, outerwrapperOptions ) );


//
//      = checkOptions.label;
//     if ( labelOptions !== false ) {
//       if ( labelOptions === undefined ) {
//         labelOptions = { attributes: { $text: radiobutton[1] }, layout: "check" };
//       } else {
//         labelOptions.layout = labelOptions.layout || "check";
//         labelOptions.attributes = Object.assign(
//           { $text: radiobutton[1] },
//           labelOptions.attributes
//         );
//
//         labelOptions = Object.assign(
//           { text: radiobutton[1], layout: "check" },
//           labelOptions
//         );
//       };
//     };
// // debugger
//     checkOptions = Object.assign(
//       {
//         type: "radio",
//         value: options.value,
//         checked: radiobutton[0],
//         required: options.required,
//       },
//       checkOptions || {}
//     );
//
//     checkOptions.attributes =  Object.assign(
//       {
//         $dependentValue: function () {
//           return this.closest("radiobuttons").$dependentValue();
//         },
//         $labelOnclick: function () { return true; },
//       },
//       ( checkOptions.input || {} ).attributes || {}
//     );
// // debugger
//     var check = f.check( name, checkOptions );
//
//
// // debugger;
//     var outerwrapperOptions = Object.assign(
//       {
//         hint: checkOptions.hint,
//         help: checkOptions.help,
//         // input:
//         label: labelOptions,
//         attributes: checkOptions.outerwrapper,
//       },
//
//     );
//
//     return a.radiobutton( f.outerwrapper( check, outerwrapperOptions ) );

  } );

  return a.radiobuttons( components, {

    $labelOnclick: function (e) {
      // debugger
      if ( e.target.closest("radiobutton") ) {
        // var input = e.target.closest("radiobutton").querySelector("input");
        // if ( e.target.closest("helpbutton") || e.target.closest("helpbody") ) {
        //   input.focus();
        //   return false;
        // } else if ( e.target === input ) {
          return true;
        // } else {
        //   input.click();
        //   return false;
        // };
      } else {
        var first = this.querySelectorAll("radiobuttons input:enabled")[0];
        first && first.focus();
        return false;
      };
    },

    $dependentValue: function() {
      var selected = this.querySelector('input:checked');
      return selected ? selected.value : null;
    },

  } );

};
