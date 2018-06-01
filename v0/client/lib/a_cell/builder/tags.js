var AcellBuilderTags = function ( cellBuilder ) {

	// A call to this builder of .<anyMethod>( ... ) will return
	// a gene of { $type: "<anyMethod>", ... }.

  var htmlTagsShim = {
    get: function( target, property ) {
			return function() {
				return cellBuilder.tag(property, ...arguments)
			};
    },
  };

	return new Proxy( this, htmlTagsShim );

};
