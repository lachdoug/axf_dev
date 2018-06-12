AxDslFormBuilder.prototype.customFieldBuilder = function() {

  return new AxDslFormCustomFieldBuilder( this );

};

function AxDslFormCustomFieldBuilder( formBuilder ) {

  this.formBuilder = formBuilder;
  this.cellBuilder = formBuilder.cellBuilder;

}
