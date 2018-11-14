ax.extensions.appkit.lib.fieldValueForCollection = function( value ) {

  if ( value instanceof Array ) {
    return value
  } else if ( value ) {
    return [ value ]
  } else {
    return []
  }

}
