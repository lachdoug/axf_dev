AxFrameworkExtensions.prototype.script = function( src ) {

  var tag = document.createElement("script");
  var head = document.head;
  var lastEl = head.lastChild;
  tag.src = src;
  head.insertBefore(tag, lastEl);

  return null;

};
