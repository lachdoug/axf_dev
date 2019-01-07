ax.extension.appkit.lib.field.name.
assemble = function( ...keys ) {

  let primary = keys.shift()

  if ( keys.length ) {
    return primary + '[' + keys.join('][') + ']'
  } else {
    return primary
  }

}
