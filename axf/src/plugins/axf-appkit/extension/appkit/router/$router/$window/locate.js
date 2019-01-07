ax.extension.appkit.router.$router.$window.locate = function( router ) {

  return function() {
    let location = window.location
    let path = location.href.
                replace( location.origin, '' ).
                replace( router.$config.options.mount, '' )
    router.$to( path )
  }

}
