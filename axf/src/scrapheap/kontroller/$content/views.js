ax.extension.appkit.kontroller.$content.views = function( routes, options ) {

  let views = [];

  Object.keys( routes ).forEach( function( path ) {

    let paramKeys = path.match(/(:\w+|\*\w+)/g) || [];
    let pathRegex = path;
    let paramNames = []

    paramKeys.forEach( function( paramKey ) {
      paramNames.push( paramKey.slice(1) );
      let pattern = paramKey.charAt(0) === ":" ? "(\\w+)" : "(.*$)"
      pathRegex = pathRegex.replace( paramKey, pattern );
    } );

    pathRegex = "^" + pathRegex.replace( /\//g, "\\/" ) + "$";

    let content = routes[path];

    views.push( [ pathRegex, paramNames, content ] )

  } );

  return views

}
