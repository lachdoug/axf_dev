ax.extension.appkit.lib.field.collection.includes = function( array, value ) {

  if ( value === undefined || value === null ) value = ''
  return array.some( function( el ) { return el.toString() === value.toString(); } );

};
