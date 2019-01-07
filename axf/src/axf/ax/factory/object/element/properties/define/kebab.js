ax.factory.object.element.properties.define.kebab = function ( name ) {

  // Convert name from camelCase to kebab-case
  return ( name[0].match(/[A-Z]/) ? "-" : "" ) + name.
    replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()

}
