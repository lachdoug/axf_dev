ax.extensions.appkit.lib.fieldCollectionFrom = function( collection ) {

  // var a = this.axFunction.tags;
  var x = ax.x;

  if ( !collection ) {
    return []
  } else if ( collection instanceof Array ) {
    return collection.map( function(item) {
      if ( item instanceof Array ) {
        return item;
      } else if ( typeof item === "object" ) {
        var key = Object.keys( collectionOption )[0];
        return [ key, collectionOption[key] ];
      } else {
        return [ item, x.lib.labelize(item) ];
      };
    } )
  } else {
    return Object.keys( collection ).map(function( k ) {
      return [ k , collection[k] ];
    } );
  };

};
