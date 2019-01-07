ax.extension.appkit.lib.object.dig = function( object, keys) {

  let result = object

  for (let key in keys) {
    if ( result  == null ) {
      return null
    } else {
      result = result [ keys[key] ] || null
    }
  }

  return result

}
