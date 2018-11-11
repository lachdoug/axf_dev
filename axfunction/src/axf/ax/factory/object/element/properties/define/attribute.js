ax.factory.object.element.properties.define.attribute = function ( object ) {
  var result = ""

  Object.keys( object ).forEach( function(property) {
    if ( typeof  object[property] !== "object" ) {
      // Convert property from camelCase to kebab-case
      let kebab =  ( property[0].match(/[A-Z]/) ? "-" : "" ) + property.
        replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
      result += ( kebab + ": " + object[property] + "; ")
    }
  } )

  return result
}
