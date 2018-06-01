AcellBuilderExtensionsFormBuilder.prototype.customFieldBuilder = function() {

  return new AcellBuilderExtensionsFormCustomFieldBuilder( this );

};

function AcellBuilderExtensionsFormCustomFieldBuilder( formBuilder ) {

  this.formBuilder = formBuilder;
  this.cellBuilder = formBuilder.cellBuilder;

}
