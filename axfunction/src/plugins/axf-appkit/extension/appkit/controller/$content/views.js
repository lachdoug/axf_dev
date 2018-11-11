ax.extension.appkit.controller.$content.views = function( routes, options ) {

  var views = [];

  Object.keys( routes ).forEach( function( path ) {

    var paramKeys = path.match(/(:\w+|\*\w+)/g) || [];
    var pathRegex = path;
    var paramNames = []

    paramKeys.forEach( function( paramKey ) {
      paramNames.push( paramKey.slice(1) );
      var pattern = paramKey.charAt(0) === ":" ? "(\\w+)" : "(.+$)"
      pathRegex = pathRegex.replace( paramKey, pattern );
    } );

    pathRegex = "^" + pathRegex.replace( /\//g, "\\/" ) + "$";

    content = routes[path];

    views.push( [ pathRegex, paramNames, content ] )

  } );

  return views

}
