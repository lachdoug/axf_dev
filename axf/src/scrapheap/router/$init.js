ax.extension.appkit.router.$init = function( options ) {

  return function () {
    if ( options.bind === "window" || options.bind === window ) {
      window.addEventListener('popstate', function(event) {
    // let location = window.location.pathname.replace( options.root, '' )
    // location = location || options.home
    // location = location + window.location.search
        this.$open()
      }.bind(this) )
    }
    // let location = window.location.pathname.replace( options.root, '' )
    // location = location || options.home
    // location = location + window.location.search
    // this.$open( location )
    this.$open( options.home || '/' )

  }

}
