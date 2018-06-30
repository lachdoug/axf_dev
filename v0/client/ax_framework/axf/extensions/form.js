AxFrameworkExtensions.prototype.form = function( components, options ) {
	var formBuilder = new AxFrameworkExtensionsFormBuilder( this.axFramework );
	return formBuilder.form( components, options );
};
