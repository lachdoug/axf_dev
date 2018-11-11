ax.extension.appkit.router.$open = function() {

  return function ( pathWithQueryString ) {
    this.$state = ax.x.appkit.lib.url.extractParamsFromPath( pathWithQueryString )
  }

}
