AxFunction.Extensions.plugin( 'controller', function( routes, options = {} ) {

  var a = this.a;
  var x = this;

  var views = [];

  Object.keys( routes ).forEach( function( pathSpec ) {

    var paramKeys = pathSpec.match(/(:\w+|\*\w+)/g) || [];
    var pathRegex = pathSpec;
    var paramNames = []

    paramKeys.forEach( function( paramKey ) {
      paramNames.push( paramKey.slice(1) );
      var pattern = paramKey.charAt(0) === ":" ? "(\\w+)" : "(.+$)"
      pathRegex = pathRegex.replace( paramKey, pattern );
    } );

    pathRegex = "^" + pathRegex.replace( /\//g, "\\/" ) + "$";

    content = routes[pathSpec];

    views.push( [ pathRegex, paramNames, content ] )

  } );

  var viewContent = function( target, path, params ) {

    var params = params || {};
    var content;
    for ( var i in views ) {
      var view = views[i];
      var pathRegex = new RegExp( view[0] )
      var match = path.match( pathRegex );
      if ( match ) {
        var paramNames = view[1];
        content = view[2];
        paramNames.forEach( function( paramName, i ) {
          params[paramName] = match[ i + 1 ];
        } );
        break;
      };
    };

    if ( typeof content === "function" ) {
      content = content( params, target );
    };

    // debugger

    return a.view( content, options.view );

  };

  var attributes = Object.assign(
    {
      id: options.id,
      $init: function() {
        if ( options.bind ) {
          this.$router = document.querySelector( options.bind ).$bind(this);
        } else {
          this.$renderView( options.root || '/' )
        }

      },
      // open: function( path, params ) { this.$open( path, params ) }, // convenience for $open
      $open: function ( path, params ) {
        if ( options.bind ) {
          this.$router.$open( path, params )
        } else {
          var decoded = x.appkit.lib.decodePath( path );
          var mergedParams = Object.asssign( decoded.queryParams, params );
          this.$renderView( decoded.path, mergedParams );
        };
      },
      $renderView: function ( path, params ) {
        // debugger
        this.$components = [ viewContent( this, path, params ) ];
      }
    },
    options.attributes || {}
  );
// debugger;
  return a.controller( null, attributes );

} );
