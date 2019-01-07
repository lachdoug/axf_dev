ax.extension.appkit.controller.$to = function ( path ) {

  let locator = ax.x.appkit.lib.url.locator( path )
// debugger
  this.$locate( locator )


  // for ( let i in this.$slaves) {
  //
  //   if ( document.body.contains( this.$slaves[i] ) ) {
  //     this.$slaves[i].$to( path )
  //   } else {
  //     this.$slaves.splice( i, 1 )
  //   }
  // }

    // if ( options.bind ) {
    //   this.$router.$to( path, params )
    // } else {
    //   var decoded = ax.x.appkit.lib.extractParamsFromPath( path )
    //   params = { ...decoded.params, ...params }
    //   this.$open( decoded.path, params )
    // }


}
