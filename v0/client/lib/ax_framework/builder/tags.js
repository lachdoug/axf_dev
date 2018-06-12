var AxBuilderTags = function ( cellBuilder ) {

  var htmlTagsShim = {
    get: function( target, property ) {
			return function() {
				return cellBuilder.tag(property, ...arguments)
			};
    },
  };

	return new Proxy( this, htmlTagsShim );

};
