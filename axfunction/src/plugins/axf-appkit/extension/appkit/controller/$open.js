ax.extension.appkit.controller.$open = function ( options ) {

  return function( path, params ) {
    this.$state = {
      path: path,
      params: params
    }
  }

}
