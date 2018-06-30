AxFrameworkExtensionsReportBuilder.prototype.basic = function(
  propertyName,
  propertyType,
  value,
  options={}
) {

  if ( propertyType === undefined ) {
    propertyType = "output";
  };
  // debugger;

  // if ( propertyType === "output" ) {
  //   return this.output( propertyName, value, options );
  // } else {
    return this[propertyType]( propertyName, value, options );
  // };

};
