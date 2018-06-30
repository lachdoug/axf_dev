AxFrameworkExtensionsReportBuilder.prototype.report = function( components, data, options={} ) {

  var a = this.axFramework.tags;

  this.data = data;

  if ( typeof components === "function" ) {
    components = components( this );
  };

  return a.report( components, options.reportAttributes );

};
