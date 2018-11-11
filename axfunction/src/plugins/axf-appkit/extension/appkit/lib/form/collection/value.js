ax.extension.appkit.lib.form.collection.value = function( value ) {

  if ( value instanceof Array ) {
    return value
  } else if ( value ) {
    return [ value ]
  } else {
    return []
  }

}
