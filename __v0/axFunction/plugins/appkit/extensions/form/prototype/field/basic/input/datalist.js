// Options
// attributes - <datalist> tag attributes

ax.extensions.form.datalist = function(
  collection,
   options={}
) {

  var a = ax.a;
  // var x = this.axFunction.extensions;

  collection = x.appkit.lib.fieldCollectionFrom( collection );

  var components = collection.map( function ( el ) {
    return a.option( el[1], { value: el[0] } );
  } );
  return a.datalist( components, options.attributes );

};
