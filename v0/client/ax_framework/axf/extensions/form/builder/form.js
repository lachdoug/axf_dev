AxFrameworkExtensionsFormBuilder.prototype.form = function( components, options={} ) {

  var a = this.axFramework.tags;
  var x = this.axFramework.extensions;
  var f = this;

  this.data = options.data;

  // Extract a value from this.data
  // name is the field name, e.g. person[names]
  this.formDataValueFor = function( name ) {

    // Don't need the [] at the end of name
    // when name is for an Array.
    if ( name.slice(-2) === "[]" ) {
      name = name.slice( 0, name.length - 2 )
    };

    // Convert name into Array of keys.
    var dataKeys = x.lib.nameKeys(name)

    // Dig value from form builder data.
    return x.lib.dig( this.data, ...dataKeys )

  };
// debugger;
  var attributes = Object.assign(
    {
      action: options.action,
      method: options.method || "POST"
    },
    ( options.attributes || {} )
  );

  if ( typeof components === "function" ) {
    components = components( this );
  };

  return a.form( components, attributes );

};
