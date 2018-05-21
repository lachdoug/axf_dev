function ACellBuilder() {

	// Create a proxy of this builder, which catches calls to get to missing
	// properties and returns a gene with $type being the name of the
	// missing property.
	// A call to this builder of missing method .h1( ... ) will return
	// a gene of { $type: "h3", ... }
  var htmlTagsShim = {
    get: function( target, property ) {
			if (target[property] !== undefined) {
				return target[property];
			} else {
				return function() {
					return geneForTag(property, ...arguments)
				}
			};
    },
  };

	var cellBuilderProxy = new Proxy( this, htmlTagsShim );

  this.dsl = new ACellDsl( cellBuilderProxy );

  this.cellFor = function( geneContent, geneOptions ) {
    return Object.assign(
      { $cell: true },
      geneFor( geneContent, geneOptions )
    );
  };

  this.tag = function( tag, geneContent, geneOptions ) {
		return geneForTag( tag, geneContent, geneOptions );
  };

	var mergeGene = function( genePartial, geneOptions ) {
		geneOptions = geneOptions || {};
		result =  geneOptions.multiple ? { multiple: "multipe" } : {}
		delete geneOptions.multiple;
		return Object.assign( result, genePartial, geneOptions );
	};

  var geneFor = function( geneContent, geneOptions ) {
		if ( typeof geneContent === "string" || typeof geneContent === "number" ) {
			return geneForString( 'div', geneContent, geneOptions );
		} else if ( geneContent instanceof Array ) {
			return geneForArray( 'div', geneContent, geneOptions );
		} else if ( typeof geneContent === "function" ) {
			return geneFor( geneContent( cellBuilderProxy ), geneOptions );
		} else if ( typeof geneContent === "object" ) {
			return mergeGene( geneContent, geneOptions )
		};
	};


	var geneForTag = function( geneType, geneContent, geneOptions ) {
		if ( typeof geneContent === "string" || typeof geneContent === "number" ) {
			return geneForString( geneType, geneContent, geneOptions );
		} else if ( geneContent instanceof Array ) {
			return geneForArray( geneType, geneContent, geneOptions );
		} else if ( typeof geneContent === "function" ) {
			return geneForTag( geneType, geneContent( cellBuilderProxy ), geneOptions );
		} else if ( typeof geneContent === "object" ) {
			return geneForObject( geneType, geneContent, geneOptions );
		} else {
			return { $type: geneType };
    };
	};

	var geneForString = function( geneType, text, geneOptions ) {
		return mergeGene(
			{
				$type: geneType,
				$text: text,
			},
			geneOptions
		);
	};

	var geneForArray = function( geneType, components, geneOptions ) {
		return mergeGene(
			{
				$type: geneType,
				$components: components.map( function (el) {
					return geneFor( el );
				} ),
			},
			geneOptions
		);
	};

	var geneForObject = function( geneType, genePartial, geneOptions ) {
		return mergeGene(
			Object.assign(
				{ $type: geneType },
				genePartial
			),
			geneOptions
		);
	};

};
