AxFunction.Extensions.Appkit.Library.prototype.arrayIncludes = function( array, value ) {

  return array.some( function( el ) { return el.toString() === value.toString(); } );

};
