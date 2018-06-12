AxDslFormBuilder.prototype.cancel = function( geneContentOrGeneOptions, geneOptions ) {

  var a = this.cellBuilder;

  if ( typeof geneContentOrGeneOptions === "undefined" ) {
    geneContentOrGeneOptions = "Cancel";
  };

  geneOptions = Object.assign( {
    type: "button",
    onclick: function(e) { window.history.back(e) },
  }, ( geneOptions || {} ) )

  return a.button( geneContentOrGeneOptions, geneOptions );

};
