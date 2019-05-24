ax.extension.appkit.list.element = function( object ) {

  let a = ax.a
  let x = ax.x

  if ( ax.type.is.array( object ) ) {
    return a.ol( object.map(
      ( element ) => a.li( x.appkit.list.element( element ) )
    ) )
  } else if ( ax.type.is.null( object ) ) {
    return a["appkit-list-type-null"]( "null" )
  } else if ( ax.type.is.object( object ) ) {
    return a.ul(
      Object.keys( object ).map( ( key ) => {
        return a.li( [
          a.label( key ), ' ',
          x.appkit.list.element( object[ key ] )
        ] )
      } )
    )
  } else if ( ax.type.is.number( object ) ) {
    return a["appkit-list-type-number"]( object )
  } else {
    return a["appkit-list-type-text"]( object )
  }

}
