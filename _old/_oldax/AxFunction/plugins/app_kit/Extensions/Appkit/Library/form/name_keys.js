AxFunction.Extensions.Appkit.Library.prototype.nameKeys = function(name) {

  return name.split('[').map( function( k ) {
    if ( k.slice(-1) === "]" ) {
      return k.slice( 0, k.length - 1 );
    }
      return k;
  } );

};
