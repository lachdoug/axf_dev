function AxBuilderExtensionsFormBuilder( cellBuilder ) {

  this.cellBuilder = cellBuilder;

  // this.data = {};

  // Extract a value from formBuilderOptions.data
  // name is the field name, e.g. person[names]
  this.formDataValueFor = function( name ) {

    // Don't need the [] at the end of name
    // when name is for an Array.
    if ( name.slice(-2) === "[]" ) {
      name = name.slice( 0, name.length - 2 )
    };

    // Convert name into Array of keys.
    var dataKeys = cellBuilder.extensionsBuilder.lib.nameKeys(name)

    // Dig value from form builder data.
    return cellBuilder.extensionsBuilder.lib.dig( this.data, ...dataKeys )

  };

};
