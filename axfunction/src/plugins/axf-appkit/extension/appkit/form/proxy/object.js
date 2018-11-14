ax.extension.appkit.form.proxy.
object = function( options ) {
  return {
    $nest: () => options.nest,
    $data: () => options.data,
    $layout: () => options.layout,
    ...ax.extension.appkit.form.factory,
  }
}
