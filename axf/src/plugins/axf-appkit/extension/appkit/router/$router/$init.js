ax.extension.appkit.router.$router.$init = function () {

  this.$views = ax.x.appkit.router.$router.$views( this )
  this.$master = ax.x.appkit.router.$router.$master( this )
  this.$window = ax.x.appkit.router.$router.$window( this )


  let options = this.$config.options

  if ( this.$master === window ) {
    window.addEventListener( 'popstate', function( event ) {
      this.$window.locate()
    }.bind(this) )
    this.$window.locate()
  } else if ( this.$master ) {
    // debugger
    this.$master.$enslave( this )
  } else {
    let path = ( options.scope || '' ) + ( options.home ? `/${ options.home }` : '' )
    this.$open( path )
  }

}
