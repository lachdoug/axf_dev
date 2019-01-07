ax.extension.appkit.controller.$open = function ( options ) {

  return function( path ) {
    // debugger
    if ( this.$master === window ) {
      if ( path[0] === '/' && options.mount ) path = options.mount + path
      this.$windowOpen( path )
    } else if ( this.$master ) {
      if ( path[0] === '/' ) {
        this.$master.$open( path )
      } else {
        path = window.location.pathname + '/' + path
        debugger
        this.$master.$open( path )
      }
    } else {
      // debugger
      this.$to( path )
    }



  }

}
