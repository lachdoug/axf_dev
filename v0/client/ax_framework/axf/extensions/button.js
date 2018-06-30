AxFrameworkExtensions.prototype.button = function( content, onclickFunction, options = {} ) {

  var a = this.axFramework.tags;
  var x = this.axFramework.extensions;

  var attributes = Object.assign(
    { onclick: onclickFunction },
    options.attributes
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
    attributes
  );

};

// .btn alias
AxFrameworkExtensions.prototype.btn = AxFrameworkExtensions.prototype.button;
