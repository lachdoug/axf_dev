AxFunction.Extensions.prototype.button = function( content, onclickFunction, options = {} ) {

  var a = this.axFunction.tags;
  var x = this.axFunction.extensions;

  var attributes = Object.assign(
    { onclick: onclickFunction },
    options.attributes
  );

  var faOptions = Object.assign(
    {
      reverse: options.iconReverse,
      compact: options.iconCompact,
    },
    options.fontawesome || {}
  );

  return a.button(
    options.icon ? x.icon( options.icon, content, faOptions ) : content,
    attributes
  );

};

// .btn alias
AxFunction.Extensions.prototype.btn = AxFunction.Extensions.prototype.button;
