AcellDslFormBuilder.prototype.textarea = function( nameOrGeneOptions, geneOptionsOrBuilderOptions, builderOptions ) {

	var geneOptions;

	if ( typeof nameOrGeneOptions === "string" ) {
		geneOptions = Object.assign( { name: nameOrGeneOptions }, ( geneOptionsOrBuilderOptions || {} ) );
		builderOptions = builderOptions || {};
	} else {
		geneOptions = nameOrGeneOptions;
		builderOptions = geneOptionsOrBuilderOptions || {};
	};

	geneOptions = Object.assign(
		{
	    _dependentValue: function() {
	      return this.value;
			},
			oninput: function(e) {
				this.closest("dependentfield")._fieldChanged();
			},
	  },
		geneOptions
	);

	return this.cellBuilder.textarea( geneOptions )

};
