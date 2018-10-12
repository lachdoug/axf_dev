// ax.extensions.appkit.lib.dataValue = function ( data, name ) {
//
//   // Don't need the [] at the end of name
//   // when name is for an Array.
//   if ( name.slice(-2) === "[]" ) {
//     name = name.slice( 0, name.length - 2 )
//   };
//
//   // Convert name into Array of keys.
//   var dataKeys = this.nameKeys(name)
//
//   // Dig value from form builder data.
//   return this.dig( data, ...dataKeys )
//
// };
