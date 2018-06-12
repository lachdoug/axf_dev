AxBuilderExtensionsComponentsBuilder.prototype.button = function( content, onclickFunction, options = {} ) {

  var a = this.cellBuilder.tagBuilder;
  var x = this.cellBuilder.extensionsBuilder;

  var buttonAttributesOptions = Object.assign(
    { onclick: onclickFunction },
    options.buttonAttributes
  );

  var faOptions = Object.assign(
    {
      reverse: options.faReverse,
      compact: options.faCompact,
    },
    options.fontawesome || {}
  );

  return a.button(
    options.fa ? x.fa( options.fa, content, faOptions ) : content,
    buttonAttributesOptions
  );

};
