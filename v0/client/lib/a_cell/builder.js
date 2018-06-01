var AcellBuilder = function () {

	// // Create a proxy of this builder, which catches gets to missing
	// // properties, then returns a gene with $type being the name of the
	// // missing property.
	// // A call to this builder of missing method .h1( ... ) will return
	// // a gene of { $type: "h3", ... }
  // var htmlTagsShim = {
  //   get: function( target, property ) {
	// 		if (target[property] !== undefined) {
	// 			return target[property];
	// 		} else {
	// 			return function() {
	// 				return geneForTag(property, ...arguments)
	// 			}
	// 		};
  //   },
  // };
  //

	this.tagBuilder = new AcellBuilderTags( this );
  this.extensionsBuilder = AcellBuilderExtensions && new AcellBuilderExtensions( this );

  this.randomId = function( prefix = "ax" ) {
    var random;
  	do {
  		random = prefix + "_" + Math.random().toString(36).substr(2);
  	} while (
  		document.querySelector( "#" + random ) != undefined
  	);
  	return random;
  };

  this.cell = function( geneContent, geneOptions ) {
    return Object.assign(
      { $cell: true },
      geneForTag( "cell", geneContent, geneOptions )
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
			return geneForString( 'span', geneContent, geneOptions );
		} else if ( geneContent instanceof Array ) {
			return geneForArray( 'div', geneContent, geneOptions );
		} else if ( typeof geneContent === "function" ) {
			return geneFor( geneContent( this.tagBuilder, this.extensionsBuilder ), geneOptions );
		} else if ( typeof geneContent === "object" ) {
      // debugger;
			return mergeGene( geneContent, geneOptions )
		};
	}.bind(this);


	var geneForTag = function( geneType, geneContent, geneOptions ) {
		if ( typeof geneContent === "string" || typeof geneContent === "number" ) {
			return geneForString( geneType, geneContent, geneOptions );
		} else if ( geneContent instanceof Array ) {
			return geneForArray( geneType, geneContent, geneOptions );
		} else if ( typeof geneContent === "function" ) {
			return geneForTag( geneType, geneContent( this.tagBuilder, this.extensionsBuilder ), geneOptions );
    } else {
		// } else if ( typeof geneContent === "object" ) {
			return geneForArray( geneType, [ geneContent ], geneOptions );
      // return { $type: geneType };
    };
	}.bind(this);

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
    // Compact the array
    components = components.filter(function(n){ return n != undefined })
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

	// var geneForObject = function( geneType, genePartial, geneOptions ) {
	// 	return mergeGene(
	// 		Object.assign(
	// 			{ $type: geneType },
	// 			genePartial
	// 		),
	// 		geneOptions
	// 	);
	// };

};
