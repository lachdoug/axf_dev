AxFrameworkExtensions.prototype.report = function( components, options ) {
	var reportBuilder = new AxFrameworkExtensionsReportBuilder( this.axFramework );
	return reportBuilder.report( components, options );
};
