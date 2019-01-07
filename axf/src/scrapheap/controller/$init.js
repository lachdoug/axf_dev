ax.extension.appkit.controller.$init = function( options ) {

  return function() {

    this.$options = options

    if ( options.bind != false ) {
      this.$master =  document.querySelector( options.bind ) || this.$("^ ^appkit-controller")
      if ( !this.$master ) {
        this.$master = window
      }
    }

    if ( this.$master === window ) {
      this.$windowLocate()
      window.addEventListener( 'popstate', function( event ) {
        this.$windowLocate()
      }.bind(this) )
    } else if ( this.$master ) {
      // debugger
      this.$master.$bind( this )
    } else {
      let path = ( options.scope || '' ) + ( options.home ? `/${ options.home }` : '' )
      this.$open( path )
    }

  }

}
