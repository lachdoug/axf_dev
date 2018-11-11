ax.extensions.form.factory.object.get = function( name ) {

  // Don't need the [] at the end of name
  // when name is for an Array.
  if ( name.slice(-2) === "[]" ) {
    name = name.slice( 0, name.length - 2 )
  };

  // Convert name into Array of keys.
  var keys = ax.extensions.appkit.lib.nameKeys(name)

  // Dig value from form builder object.
  return ax.extensions.appkit.lib.dig( this.$, ...keys )

};
