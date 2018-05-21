ACellDslFormBuilder.prototype.customFieldBuilder = function() {

  return new ACellDslFormCustomFieldBuilder( this );

};

function ACellDslFormCustomFieldBuilder( formBuilder ) {

  this.formBuilder = formBuilder;
  this.cellBuilder = formBuilder.cellBuilder;

}
