ax.extension.appkit.controller.$init = function( options ) {

  return function() {
    if ( options.bind ) {
      this.$router = document.querySelector( options.bind ).$bind(this);
    } else {
      this.$open( options.root || '/' )
    }
  }

}
