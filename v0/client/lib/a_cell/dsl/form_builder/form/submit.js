ACellDslFormBuilder.prototype.submit = function( geneContentOrGeneOptions, geneOptions ) {

  if ( typeof geneContentOrGeneOptions === "undefined" ) {
    geneContentOrGeneOptions = "OK";
  };

  return this.cellBuilder.button( geneContentOrGeneOptions, geneOptions )

};
