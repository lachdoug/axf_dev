function AxFrameworkExtensionsReportBuilder( axFramework ) {

  this.axFramework = axFramework;

  // Extract a value from this.data
  // name is the property name, e.g. person[names]
  this.reportDataValueFor = function( name ) {

    // Don't need the [] at the end of name
    // when name is for an Array.
    if ( name.slice(-2) === "[]" ) {
      name = name.slice( 0, name.length - 2 )
    };

    // Convert name into Array of keys.
    var dataKeys = axFramework.extensions.lib.nameKeys(name)

    // Dig value from report builder data.
    return axFramework.extensions.lib.dig( this.data, ...dataKeys )

  };

};
