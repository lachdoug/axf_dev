ax.extension.appkit.lib.form.field.name.
assemble = function( ...keys ) {

  let primary = keys.shift()

  if ( keys.length ) {
    return primary + '[' + keys.join('][') + ']'
  } else {
    return primary
  }

}
