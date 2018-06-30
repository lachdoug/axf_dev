AxFramework.prototype.Tags = function ( axFramework ) {

  var htmlTagsShim = {
    get: function( target, property ) {
			return function() {
				return axFramework.cellBuilder.tag( property, ...arguments );
			};
    },
  };

	return new Proxy( this, htmlTagsShim );

};
