ax.extension.lib.name.dismantle = function(name) {

  return name.split('[').map( function( string ) {
    if ( string.slice(-1) === "]" ) {
      return string.slice( 0, string.length - 1 )
    }
      return string
  } )

}
