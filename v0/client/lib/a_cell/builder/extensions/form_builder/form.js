AcellBuilderExtensionsFormBuilder.prototype.form = function( content, builderOptions = {} ) {

  this.formBuilderOptions = builderOptions;

  var a = this.cellBuilder.tagBuilder;

  var geneOptions = Object.assign(
    {
      action: builderOptions.action,
      method: builderOptions.method || "POST"
    },
    ( builderOptions.form || {} )
  );

  // action: "/test/people"

  // Assign arguments depending on the data type of the first argument
  // if ( content instanceof Array ) {
  //   geneOptions.$components = content;
  // } else
  if ( typeof content === "function" ) {
    content = content( this );
  // } else {
  //   console.error( "Acell error: Form content not defined." );
  };

  // // Make POST the default form method
  // geneOptions.method = geneOptions.method || "POST"

  // Build the form geneOptions

  return a.form( content, geneOptions );

};
