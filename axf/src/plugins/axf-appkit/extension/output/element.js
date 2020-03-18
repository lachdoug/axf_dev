ax.extension.output.element = function( object ) {

  let a = ax.a
  let x = ax.x

  if ( ax.is.array( object ) ) {
    return a.ol( object.map(
      ( element ) => a.li( x.output.element( element ) )
    ) )
  } else if ( ax.is.null( object ) ) {
    return a['|appkit-output-null']( null )
  } else if ( ax.is.function( object ) ) {
    return a['|appkit-output-function']( `𝑓 ${ object }` )
  } else if ( ax.is.object( object ) ) {
    return a.ul(
      Object.keys( object ).map( ( key ) => {
        return a.li( [
          a.label( key ), ' ',
          x.output.element( object[ key ] )
        ] )
      } )
    )
  } else if ( ax.is.number( object ) ) {
    return a['|appkit-output-number']( object )
  } else if ( ax.is.boolean( object ) ) {
    return a['|appkit-output-boolean']( object )
  } else {
    return a['|appkit-output-text']( object )
  }

}
