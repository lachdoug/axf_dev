ax.extension.appkit.lib.url.extractParamsFromPath = function( pathWithQueryString ) {

  var result = {};
// debugger
  pathWithQueryString = pathWithQueryString.split("?");
  result.path = pathWithQueryString[0];
  var queryString = pathWithQueryString[1];
  if ( queryString ) {
    result.params = this.queryStringToObject( queryString );
  } else {
    result.params = {};
  };
  return result;

};
