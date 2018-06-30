// Options
// attributes - <datalist> tag attributes

AxFrameworkExtensionsFormBuilder.prototype.datalist = function(
	collection,
 	options={}
) {

	var a = this.axFramework.tags;

	// var datalistId = attributes.id + "_datalist";
	// attributes.list = datalistId;

  // Convert collection to array of arrays if it's an object.
	if ( !( collection instanceof Array ) ) {
		collection = Object.keys(collection).map(function( k ) {
			return [ k , collection[k] ];
		});
	};

	var components = collection.map( function ( el ) {
    if ( typeof el === "string" ) {
      return a.option( el, { value: el } );
    } else {
      return a.option( el[1], { value: el[0] } );
    };
	} );
	return a.datalist( components, options.attributes );

};
