ax.extension.appkit.router.$init = function( routes, options ) {
  return function () {
    // debugger
    this.$router = ax.x.appkit.router.$router( this, routes, options )
    this.$router.$init()
  }
}
