function ACellDsl( cellBuilder ) {

	this.form = function( geneContentOrGeneOptions, geneOptionsOrBuilderOptions, builderOptions ) {
    var formBuilder = new ACellDslFormBuilder( cellBuilder );
		return formBuilder.form( geneContentOrGeneOptions, geneOptionsOrBuilderOptions, builderOptions );
  };

	this.request = function( action, successFunction, errorFunction ) {
		var requestBuilder = new ACellDslRequestBuilder( cellBuilder );
		return requestBuilder.request( action, successFunction, errorFunction );
	};

};
