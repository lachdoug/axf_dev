ax.extension.appkit.router.$init = function( options ) {

  return function () {
// debugger
    if ( options.bind === "window" || options.bind === window ) {
      window.addEventListener('popstate', function(event) {
        let location = window.location.pathname.replace( options.root ,'' ) + window.location.search
        this.$open( location )
      }.bind(this) )
    }
    let location = window.location.pathname.replace( options.root, '' )
    location = location || options.home
    // debugger

    location = location + window.location.search

    this.$open( location )

  }

}
