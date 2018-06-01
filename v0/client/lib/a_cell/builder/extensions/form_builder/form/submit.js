AcellBuilderExtensionsFormBuilder.prototype.submit = function( content, options ) {

  var a = this.cellBuilder.tagBuilder;

  if ( typeof content === "undefined" ) {
    content = "Submit";
  };

  var geneOptions = Object.assign(
    {
      type: "submit"
    },
    ( options || {} )
  )

  return a.button( content, geneOptions );


};
