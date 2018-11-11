AxFunctionExtensions.prototype.form = function( components, options ) {
  var formBuilder = new AxFunctionExtensionsFormBuilder( this.axFunction );
  return formBuilder.form( components, options );
};
