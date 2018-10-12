// Options
// attributes - <select> tag attributes
// value - field value
// collection - Selections. [ [ "1", "One" ], [ "2", "Two" ] ] or { "1":"One", "2":"Two" }
// placeholder - Inserted as inactive first selection


AxFunction.Extensions.Appkit.FormFactory.prototype.select = function(
  name,
  options = {}
) {

  var value;
  var collection;

  var a = this.axFunction.tags;
  var x = this.axFunction.extensions;

  collection = options.collection || [];

  // Set default options if none given.
  if ( collection.length === 0 ) {
    collection = [ [ 0, "No" ], [ 1, "Yes" ] ]
  };

  collection = x.appkit.lib.fieldCollectionFrom( collection );

  collection = collection.map( function( optionContent ) {
    if ( optionContent[0] === "—————") {
      return { $type: "option", $text: "—————", disabled: true }
    } else {
      return { $type: "option", value: optionContent[0], $text: optionContent[1] };
    };
  });

  // ensure name ends in '[]' when multiple
  if ( attributes && attributes.multiple ) {
    name = x.appkit.lib.fieldNameForCollection( name );
  };

  // var arrayIncludes = function( array, value ) {
  //   return array.some( function( el ) { return el.toString() === value.toString(); } );
  // };

  // Mark each select options as selected if in field value, where
  // value can be a single value or an Array.
  value = x.appkit.lib.fieldValueForCollection( options.value );
  collection = collection.map( function( option ) {
    // debugger;
    if ( x.appkit.lib.arrayIncludes( value, option.value ) ) {
      option.selected = "selected";
    };
    return option;
  } );

  // include blank option with any placeholder text, and select it if no other value
  if ( options.placeholder || options.placeholder === "" ) {

    var placeholderOptions = Object.assign(
      {
        value: "",
        disabled: options.required
      },
      value ? {} : { selected: true }
    );
    // collection.unshift( { $type: "option", $text: "—————", disabled: true } );
    collection.unshift(
      a.option( options.placeholder, placeholderOptions )
      // Object.assign(
      //   { $type: "option", value: "", $text: options.placeholder },
      //
      // )
    );
  };
// debugger
  // Assemble the gene.
  // Assign a special function on the gene that returns current field value,
  // for use with dependent fields feature in field wrapper.
  var attributes = Object.assign(
    {
      name: name,
      id: options.id,
      multiple: options.multiple,
      required: options.required,
      // readonly: options.readonly,
      disabled: options.disabled,

      $options: options,

      $dependentValue: function() {
        return [].slice.call(
          this.selectedOptions
        ).map( (option) => option.value ).join(" ");
      },
      $labelOnclick: function(e) {
        var input = this.querySelector("select");
        if ( e.target === input ) {
          return true;
        } else {
          input.focus();
          return false;
        };
      },
      onchange: function() {
        this.closest("field") && this.closest("field").$fieldChanged();
      },
    },
    options.attributes || {}
  );

  // build the gene
  return a.select( collection, attributes )

};
