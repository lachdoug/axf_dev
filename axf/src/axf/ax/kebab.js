ax.kebab = function ( string ) {

  // Convert string from camelCase to kebab-case
  return ( string[0].match(/[A-Z]/) ? '-' : '' ) + string.
    replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()

}
