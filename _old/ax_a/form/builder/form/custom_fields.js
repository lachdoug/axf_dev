AxFunctionExtensionsFormBuilder.prototype.customFields = function() {

  return new AxFunctionExtensionsFormBuilderCustomFields( this );

};

function AxFunctionExtensionsFormBuilderCustomFields( formBuilder ) {

  this.formBuilder = formBuilder;
  this.axFunction = formBuilder.axFunction;
  // this.a = this.axFunction.tags;
  // this.x = this.axFunction.extensions;

};
