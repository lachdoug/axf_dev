ax.extension.appkit.lib.form.collection.includes = function( array, value ) {

  if ( value === undefined || value === null ) value = ''
  return array.some( function( el ) { return el.toString() === value.toString(); } );

};
