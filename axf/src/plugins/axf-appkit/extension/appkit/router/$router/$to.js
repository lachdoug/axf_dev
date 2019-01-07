ax.extension.appkit.router.$router.$to = function ( path ) {
// debugger
  var locator = {}
  let parts  = path.split("#")
  locator.anchor = parts[1]
  parts = parts[0].split("?")
  locator.route = parts[0]
  let search = parts[1]
  if ( search ) {
    let parameters = {}
    search.split("&").map( function( pair ) {
      pair = pair.split("=")
      parameters[ pair[0] ] = decodeURIComponent( pair[1] )
    } )
    locator.search = parameters
  }
  this.$locate( locator )

}
