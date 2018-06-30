AxFrameworkExtensionsFormBuilder.prototype.customFields = function() {

  return new AxFrameworkExtensionsFormBuilderCustomFields( this );

};

function AxFrameworkExtensionsFormBuilderCustomFields( formBuilder ) {

  this.formBuilder = formBuilder;
  this.axFramework = formBuilder.axFramework;
  // this.a = this.axFramework.tags;
  // this.x = this.axFramework.extensions;

};
