ax.extension.appkit.lib.object.inspect =
function( object, options={} ) {

  let indent = options.indent === false ? null : ( options.indent || 2 )
  let zealous = options.zealous
  let cache = new Set()

  return JSON.stringify( object, function (key, value) {

    if ( ax.type.is.object( value ) && ax.type.is.not.null( value ) ) {
      if (cache.has(value)) {
        // Cyclic reference
        try {
          // If this value does not reference a parent it can be deduped
         return JSON.parse( JSON.stringify(value) )
        }
        catch (err) {
          if ( zealous ) {
            return '' + value
          } else {
            return
          }
        }
      }
      cache.add(value)
    } else if ( zealous && ax.type.is.function( value ) ) {
      value = '𝑓 ' + value
    }
    return value

  }, indent )

}
