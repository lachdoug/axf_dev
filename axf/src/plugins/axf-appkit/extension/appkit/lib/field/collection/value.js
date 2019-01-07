ax.extension.appkit.lib.field.collection.value = function( value ) {

  if ( ax.type.is.array( value ) ) {
    return value
  } else if ( value ) {
    return [ value ]
  } else {
    return []
  }

}
