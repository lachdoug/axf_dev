AxBuilderExtensionsComponentsBuilder.prototype.markdown = function( content, options ) {

  var a = this.cellBuilder.tagBuilder;

  return a.markdown( null, { $html: marked( content ) } );

};
