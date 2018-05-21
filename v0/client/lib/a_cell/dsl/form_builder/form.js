ACellDslFormBuilder.prototype.form = function( geneContentOrGeneOptions, geneOptionsOrBuilderOptions, builderOptions ) {

  var geneOptions;

  // Assign arguments depending on the data type of the first argument
  if ( geneContentOrGeneOptions instanceof Array ) {
    geneOptions = geneOptionsOrBuilderOptions;
    this.formBuilderOptions = builderOptions || {};
    geneOptions.$components = geneContentOrGeneOptions || {};
  } else if ( typeof geneContentOrGeneOptions === "function" ) {
    geneOptions = geneOptionsOrBuilderOptions || {};
    this.formBuilderOptions = builderOptions || {};
    geneOptions.$components = geneContentOrGeneOptions( this );
  } else {
    geneOptions = geneContentOrGeneOptions;
    this.formBuilderOptions = geneOptionsOrBuilderOptions;
    if ( typeof geneOptions.$components === 'function' ) {
      geneOptions.$components = geneOptions.$components( this );
    }
  };

  // Make POST the default form method
  geneOptions.method = geneOptions.method || "POST"

  // Build the form gene
  return this.cellBuilder.form( geneOptions );

};
