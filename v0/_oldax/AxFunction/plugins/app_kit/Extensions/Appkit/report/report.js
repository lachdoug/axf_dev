AxFunction.Extensions.prototype.report = function( components, options ) {
  var reportBuilder = new AxFunction.Extensions.Report( this.axFunction );
  return reportBuilder.report( components, options );
};
