function AcellBuilderExtensions( cellBuilder ) {

	var a = cellBuilder.tagBuilder;

	this.formBuilder = new AcellBuilderExtensionsFormBuilder( cellBuilder );
	this.form = function( content, builderOptions ) {
		return this.formBuilder.form( content, builderOptions );
  };

	var requestBuilder = new AcellBuilderExtensionsRequestBuilder( cellBuilder );
	this.request = function( action, builderOptions ) {
		return requestBuilder.request( action, builderOptions );
	};

  var specformBuilder = new AcellBuilderExtensionsSpecformBuilder( cellBuilder );
	this.specform = function( content, builderOptions ) {
		return specformBuilder.specform( content, builderOptions );
  };
	this.requestform = function( action, content, builderOptions ) {
		return specformBuilder.requestform( action, content, builderOptions );
  };

	var viewsBuilder = new AcellBuilderExtensionsViewBuilder( cellBuilder );
	this.router = function( routes, options ) {
		return viewsBuilder.router( routes, options );
  };
	this.controller = function( routes, options ) {
		return viewsBuilder.controller( routes, options );
  };

	var cssBuilder = new AcellBuilderExtensionsCssBuilder( cellBuilder );
	this.css = function( content ) {
		return cssBuilder.css( content );
  };

	this.lib = new AcellBuilderExtensionsLib( this );

	var helpersBuilder = new AcellBuilderExtensionsHelpersBuilder( cellBuilder );
	this.button = function( content, onclickFunction, options ) {
		return helpersBuilder.button( content, onclickFunction, options );
  };
	this.btn = this.button;
	this.fontawesome = function( faClass, text ) {
		return helpersBuilder.fontawesome( faClass, text );
  };
	this.fa = this.fontawesome;
	this.code = function ( content ) {
		return helpersBuilder.code( content );
	};



};
