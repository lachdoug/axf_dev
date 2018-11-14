ax.extension.appkit.report.proxy.
object = function( options ) {
  return {
    $nest: () => options.nest,
    $data: () => options.data,
    $layout: () => options.layout,
    ...ax.extension.appkit.report.factory,
  }
}
