AxBuilderExtensionsLib.prototype.decodePath = function( pathWithQueryString ) {

  var result = {};

  pathWithQueryString = pathWithQueryString.split("?");
  result.path = pathWithQueryString[0];
  var queryString = pathWithQueryString[1];
  if ( queryString ) {
    result.queryParams = this.queryStringToObject( queryString );
  } else {
    result.queryParams = {};
  };
  return result;


};
