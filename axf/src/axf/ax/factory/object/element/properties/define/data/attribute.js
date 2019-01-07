ax.factory.object.element.properties.define.data.
attribute = function ( element, keys, value ) {

  let context = ax.factory.object.element.properties.define

  if ( ax.type.is.string( value ) ) {
    let kebab = keys.join('-')
    context.attribute( element, kebab, value )
  } else {
    Object.keys( value ).forEach( function( key ) {
      let kebab = context.kebab( key )
      this.attribute( element, keys.concat( key ), value[ key ] )
    }.bind( this ) )
  }

}
