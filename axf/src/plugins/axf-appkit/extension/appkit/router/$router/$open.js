ax.extension.appkit.router.$router.$open = function( path ) {
// debugger
  let options = this.$config.options

  if ( this.$master === window ) {
    if ( path[0] === '/' && options.mount ) path = options.mount + path
    if ( path[0] === '%' ) path =
      ( options.mount || '' ) + ( options.scope || '' ) + path.substr( 1 )
    this.$window.open( path )
  } else if ( this.$master ) {
    if ( path[0] === '/' ) {
      this.$master.$open( path )
    } else if ( path[0] === '%' ) {
      path = this.$locator.scope + path.substr( 1 )
      this.$master.$open( path )
    } else {
      path = window.location.pathname + '/' + path
      this.$master.$open( path )
    }
  } else {
    this.$to( path )
  }

}
