ax.extension.appkit.report.proxy.
object = function( options ) {
  return {
    $scope: () => options.scope,
    $data: () => options.data,
    $layout: () => options.layout,
    ...ax.extension.appkit.report.factory,
  }
}
