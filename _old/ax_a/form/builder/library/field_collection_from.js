AxFunctionExtensionsFormBuilderLibrary.prototype.fieldCollectionFrom = function( collection ) {

  // var a = this.axFunction.tags;
  var x = this.axFunction.extensions;

  if ( !( collection instanceof Array ) ) {
    return Object.keys( collection ).map(function( k ) {
      return [ k , collection[k] ];
    });
  } else {
    return collection.map( function(el) {
      if ( el instanceof Array ) {
        return el;
      } else if ( typeof el === "object" ) {
        var key = Object.keys( collectionOption )[0];
        return [ key, collectionOption[key] ];
      } else {
        // debugger;
        return [ el, x.lib.titleize(el) ];
      };
    } )

  };

};
