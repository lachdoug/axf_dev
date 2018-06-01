AcellBuilderExtensionsHelpersBuilder.prototype.button = function( content, onclickFunction, options = {} ) {

  var a = this.cellBuilder.tagBuilder;
  var x = this.cellBuilder.extensionsBuilder;

  var buttonTagOptions = Object.assign(
    { onclick: onclickFunction },
    options.buttonTag
  );

  return a.button( [
    options.fa ? x.fa( options.fa, content ) : content
  ], buttonTagOptions );

};
