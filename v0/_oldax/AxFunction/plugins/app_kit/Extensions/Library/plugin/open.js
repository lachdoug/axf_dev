AxFunction.Extensions.Appkit.Library.prototype.open = function( urlOrOptions, options={} ) {

  var url;
  var html;
  var target;

  if ( typeof urlOrOptions === "string" ) {
    url = urlOrOptions;
  } else {
    options = urlOrOptions;
    url = options.url;
    html = options.html;
  };

  if (html) {
    target = window.open( "", options.target, options.specs );
    target.document.write( html );
    target.document.close();
  } else {
    target = window.open(url, options.target || url, options.specs );
  };

};
