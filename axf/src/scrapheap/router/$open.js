ax.extension.appkit.router.$open = function( options ) {

  return function ( location ) {
    // if ( ax.type.is.undefined( location ) ) {
    //   location = window.location.pathname
    // }
    location = location || `${window.location.pathname}?${window.location.search}`
    if ( options.scope) {
      location = location.replace( options.scope, '' )
    }

    // if ( options.root !== '/') {
    // }
    // debugger
    // if ( location === '' ) {
    // }
    // location = location || options.home
    // location = location + window.location.search

    this.$state = ax.x.appkit.lib.url.extractParamsFromPath( location )
  }

}
