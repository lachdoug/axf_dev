ax.extensions.button = function( content, onclickFunction, options = {} ) {

  var a = ax.a;
  var x = this;

  var buttonTag = Object.assign(
    { onclick: onclickFunction },
    options.buttonTag
  );

  var iconOptions = Object.assign(
    {
      reverse: options.iconReverse,
      compact: options.iconCompact,
    },
    options.icon || {}
  );

  return a.button(
    options.icon ? x.icon( options.icon, content, iconOptions ) : content,
    buttonTag
  );

};

// .btn alias
ax.extensions.btn = ax.extensions.button;
