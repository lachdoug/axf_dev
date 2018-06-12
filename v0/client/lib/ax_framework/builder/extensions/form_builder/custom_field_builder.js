AxBuilderExtensionsFormBuilder.prototype.customFieldBuilder = function() {

  return new AxBuilderExtensionsFormCustomFieldBuilder( this );

};

function AxBuilderExtensionsFormCustomFieldBuilder( formBuilder ) {

  this.formBuilder = formBuilder;
  this.cellBuilder = formBuilder.cellBuilder;

}
