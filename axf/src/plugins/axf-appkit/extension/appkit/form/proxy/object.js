ax.extension.appkit.form.proxy.
object = function( options ) {
  return {
    $scope: () => options.scope,
    $data: () => options.data,
    $layout: () => options.layout,
    ...ax.extension.appkit.form.factory,
  }
}
