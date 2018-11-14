// Options
// attributes - <select> tag attributes
// value - field value
// collection - Selections. [ [ "1", "One" ], [ "2", "Two" ] ] or { "1":"One", "2":"Two" }
// placeholder - Inserted as inactive first selection


ax.extensions.form.factory.select = function(
  // name,
  options = {}
) {

  var value;
  var collection;

  var a = ax.a;
  var x = ax.x;

  collection = options.collection || [];

  collection = x.appkit.lib.fieldCollectionFrom( collection );

  collection = collection.map( function( optionContent ) {
    if ( optionContent[0] === "—————") {
      return a.option( "—————", { disabled: true } )
    } else {
      return a.option( null, { value: optionContent[0], $html: optionContent[1] } )
    };
  });

  // ensure name ends in '[]' when multiple
  // if ( options.multiple || ( options.selectTag && options.selectTag.multiple ) ) {
  if ( options.multiple ) {
    options.name = ax.extensions.appkit.lib.fieldNameForCollection( options.name );
    // name = x.appkit.lib.fieldNameForCollection( name );
  };

  // var arrayIncludes = function( array, value ) {
  //   return array.some( function( el ) { return el.toString() === value.toString(); } );
  // };

  // Mark each select options as selected if in field value, where
  // value can be a single value or an Array.
  value = x.appkit.lib.fieldValueForCollection( options.value );
  collection = collection.map( function( option ) {
    // debugger;
    if ( option.value && x.appkit.lib.arrayIncludes( value, option.value ) ) {
      option.selected = "selected";
    };
    return option;
  } );

  // include blank option with any placeholder text, and select it if no other value
  if ( options.placeholder || options.placeholder === "" ) {

    var optionTag = Object.assign(
      {
        value: "",
        disabled: options.required
      },
      value ? {} : { selected: true }
    );
    // collection.unshift( { $type: "option", $text: "—————", disabled: true } );
    collection.unshift(
      a.option( options.placeholder, optionTag )
      // Object.assign(
      //   { $type: "option", value: "", $text: options.placeholder },
      //
      // )
    );
  };

  var selectTag = Object.assign(
    {
      name: options.name,

      $value: function() {

        if ( this.multiple ) {
          let result = [];
          let selected = this.querySelectorAll('option:checked');
          selected.forEach( function( option ) {
            result.push( option.value )
          } )
          return result;
        } else {
          return this.value
        };

      },

      $focus: function () {
        this.focus()
      },
      $disable: function() {
        this.disabled = 'disabled'
      },
      $enable: function() {
        if ( !options.disabled ) this.removeAttribute('disabled')
      },



      // id: options.id,
      // multiple: options.multiple,
      // required: options.required,
      // readonly: options.readonly,
      // disabled: options.disabled,

      // $options: options,

      // $dependentValue: function() {
      //   return [].slice.call(
      //     this.selectedOptions
      //   ).map( (option) => option.value ).join(" ");
      // },
      // $labelOnclick: function(e) {
      //   var input = this.querySelector("select");
      //   if ( e.target === input ) {
      //     return true;
      //   } else {
      //     input.focus();
      //     return false;
      //   };
      // },
      // onchange: function() {
      //   debugger
      //   if ( this._controlChanged ) { this._controlChanged() }
      //   // this.closest("field") && this.closest("field").$fieldChanged();
      // },
    },
    options.selectTag
  );

  // build the gene
  return a.select( collection, selectTag )

};
