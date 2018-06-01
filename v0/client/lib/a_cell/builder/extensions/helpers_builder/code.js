AcellBuilderExtensionsHelpersBuilder.prototype.code = function( content ) {

  var a = this.cellBuilder.tagBuilder;

  return a.pre( content, { style: "white-space: pre-wrap;" } );

};
