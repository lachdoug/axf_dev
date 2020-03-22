ax.extension.output.element = function( value ) {

  let a = ax.a
  let x = ax.x

  if ( ax.is.array( value ) ) {
    return a.ol( value.map(
      ( element ) => a.li( x.output.element( element ) )
    ) )
  } else if ( ax.is.null( value ) ) {
    return a['|appkit-output-null']( null )
  } else if ( ax.is.function( value ) ) {
    return a['|appkit-output-function']( `𝑓 ${ value }` )
  } else if ( ax.is.object( value ) ) {
    return a.ul(
      Object.keys( value ).map( ( key ) => {
        return a.li( [
          a.label( key ), ' ',
          x.output.element( value[ key ] )
        ] )
      } )
    )
  } else if ( ax.is.number( value ) ) {
    return a['|appkit-output-number']( value )
  } else if ( ax.is.boolean( value ) ) {
    return a['|appkit-output-boolean']( value )
  } else {
    return a['|appkit-output-text']( value )
  }

}
