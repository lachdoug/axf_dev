function AxBuilderExtensions( cellBuilder ) {

	var a = cellBuilder.tagBuilder;

	this.formBuilder = new AxBuilderExtensionsFormBuilder( cellBuilder );
	this.form = function( content, options ) {
		return this.formBuilder.form( content, options );
  };

	var requestBuilder = new AxBuilderExtensionsRequestBuilder( cellBuilder );
	this.request = function( action, options ) {
		return requestBuilder.request( action, options );
	};

  var specformBuilder = new AxBuilderExtensionsSpecformBuilder( cellBuilder );
	this.specform = function( content, options ) {
		return specformBuilder.specform( content, options );
  };

	var resourcesBuilder = new AxBuilderExtensionsResourcesBuilder( cellBuilder );
	this.edit = function( action, content, options ) {
		return resourcesBuilder.edit( action, content, options );
  };

	var viewsBuilder = new AxBuilderExtensionsViewBuilder( cellBuilder );
	this.controller = function( routes, options ) {
		return viewsBuilder.controller( routes, options );
  };
	this.router = function( routes, options ) {
		return viewsBuilder.router( routes, options );
  };

	var cssBuilder = new AxBuilderExtensionsCssBuilder( cellBuilder );
	this.css = function( content ) {
		return cssBuilder.css( content );
  };

	this.lib = new AxBuilderExtensionsLib( this );

	var componentsBuilder = new AxBuilderExtensionsComponentsBuilder( cellBuilder );

	this.button = function( content, onclickFunction, options ) {
		return componentsBuilder.button( content, onclickFunction, options );
  };
	this.btn = this.button;

	this.fontawesome = function( faClass, text, options ) {
		return componentsBuilder.fontawesome( faClass, text, options );
  };
	this.fa = this.fontawesome;

	this.code = function ( content, options ) {
		return componentsBuilder.code( content, options );
	};

	this.markdown = function ( content, options ) {
		return componentsBuilder.markdown( content, options );
	};
	this.md = this.markdown;

	this.chart = function ( content, options ) {
		return componentsBuilder.chart( content, options );
	};






};
