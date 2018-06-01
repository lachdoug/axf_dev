AcellDslFormBuilder.prototype.customFieldBuilder = function() {

  return new AcellDslFormCustomFieldBuilder( this );

};

function AcellDslFormCustomFieldBuilder( formBuilder ) {

  this.formBuilder = formBuilder;
  this.cellBuilder = formBuilder.cellBuilder;

}
