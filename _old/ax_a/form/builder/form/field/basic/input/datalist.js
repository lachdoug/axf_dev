// Options
// attributes - <datalist> tag attributes

AxFunctionExtensionsFormBuilder.prototype.datalist = function(
  collection,
   options={}
) {

  var a = this.axFunction.tags;
  // var x = this.axFunction.extensions;

  collection = this.lib.fieldCollectionFrom( collection );

  var components = collection.map( function ( el ) {
    return a.option( el[1], { value: el[0] } );
  } );
  return a.datalist( components, options.attributes );

};
