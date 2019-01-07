ax.extension.appkit.kontroller.$to = function ( options ) {

  return function ( path, params ) {
    if ( options.bind ) {
      this.$router.$to( path, params )
    } else {
      var decoded = ax.x.appkit.lib.extractParamsFromPath( path )
      params = { ...decoded.params, ...params }
      this.$open( decoded.path, params )
    }
  }

}
