ax.factory.object.element.properties.define.
style = function ( element, object ) {

  let result = ""

  Object.keys( object ).forEach( function( key ) {
    // if ( !ax.type.is.object( object[property] ) ) {
      let kebab = this.kebab( key )
      result += ( kebab + ": " + object[key] + "; ")
    // }
  }.bind( this ) )

  this.attribute( element, "style", result )

}
