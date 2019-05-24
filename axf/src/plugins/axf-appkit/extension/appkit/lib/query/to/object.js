ax.extension.appkit.lib.query.to.
object = function( queryString ) {

  var result = {}

  queryString.split("&").map( function( pair ) {
    pair = pair.split("=")
    result[ pair[0] ] = decodeURIComponent( pair[1] )
  } )

  return result

}
