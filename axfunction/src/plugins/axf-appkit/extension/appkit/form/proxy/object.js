ax.extension.appkit.form.proxy.
object = function( options ) {
  return {
    object: options.object,
    layout: options.layout,
    ...ax.extension.appkit.form.factory,
  }
}
