AxFrameworkExtensionsReportBuilder.prototype.wrapper = function(
  property,
  propertyName,
  propertyOptions
) {

  var a = this.axFramework.tags;
  var f = this;

  var wrapperOptions = Object.assign(
    {
      // id: propertyOptions.id + "_wrapper",
    },
    propertyOptions.wrapper || {}
  )

  var components = this.labeler( property, propertyName, propertyOptions );

  // if ( propertyOptions.dependent ) {
    return a.wrapper( components, wrapperOptions );
  // } else {
  //   return a.propertywrapper( components, wrapperOptions )
  // }

};
