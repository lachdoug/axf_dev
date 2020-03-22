ax.extension.lib.compact = function( value ) {

  let compact = ax.x.lib.compact

  if ( ax.is.array( value ) ) {
    return compact.array( value )
  } else if ( ax.is.object( value ) ) {
    return compact.object( value )
  } else if ( [ '', undefined, null ].includes( value ) ) {
    return null
  } else {
    return value
  }

}



ax.extension.lib.compact.object = function( object ) {

  for (const key in object) {
    object[key] = this( object[key] )
    if (
      object[key] === null ||
      ( ax.is.object( object[key] ) && Object.keys( object[key] ).length === 0 ) ||
      ( ax.is.array( object[key] ) && object[key].length === 0 )
    ) delete object[key]
  }

  return object

}

ax.extension.lib.compact.array = function( array ) {

  return array.
    map( value => this( value ) ).
    filter( value => value != null )

}

//
// ax.extension.lib.compact.value = function( value ) {
//
//   let x = ax.x
//
//   if ( ax.is.array( value ) ) {
//     collection = value.map( item => x.lib.compact.value )
//
//     if ( !Object.entries( object[key] ).length ) delete object[key]
//   } else if ( object[key] && ax.is.object( key ) ) {
//     this.compact( object[key] )
//     if ( !Object.entries( object[key] ).length ) delete object[key]
//   } else {
//     if ( object[key] === '' || object[key] === undefined || object[key] === null ) delete object[key]
//   }
//
//   return object
//
// }
