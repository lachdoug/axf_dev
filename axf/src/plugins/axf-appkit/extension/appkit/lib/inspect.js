ax.extension.appkit.lib.inspect = function( variable, options={} ) {

  let result
  let zealous = options.zealous === false ? false : true

  if ( ax.type.is.object( variable ) ) {
    result = ax.x.appkit.lib.object.inspect( variable, { zealous: zealous } )
  } else if ( ax.type.is.function( variable ) ) {
    result = '𝑓 ' + variable
  } else {
    result = variable
  }

  return result
  
}
