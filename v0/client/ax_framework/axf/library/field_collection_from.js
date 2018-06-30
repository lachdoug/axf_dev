AxFrameworkLibrary.prototype.fieldCollectionFrom = function( collection ) {

  if ( !( collection instanceof Array ) ) {
		return Object.keys( collection ).map(function( k ) {
			return [ k , collection[k] ];
		});
	} else {
    var lib = this;
    return collection.map( function(el) {
      if ( el instanceof Array ) {
        return el;
      } else if ( typeof el === "object" ) {
        var key = Object.keys( collectionOption )[0];
        return [ key, collectionOption[key] ];
      } else {
        // debugger;
        return [ el, lib.titleize(el) ];
      };
    } )

  };

};
