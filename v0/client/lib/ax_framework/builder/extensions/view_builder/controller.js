AxBuilderExtensionsViewBuilder.prototype.controller = function( routes, options = {} ) {

  var a = this.cellBuilder.tagBuilder;
  var x = this.cellBuilder.extensionsBuilder;

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
        paramNames = view[1];
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

    return a.view( content, options.view );

  };

  var geneOptions = Object.assign(
    {
      id: options.id,
      $init: function() {
        if ( options.bind ) {
          this._router = document.querySelector( options.bind )._bind(this);
        } else {
          this._render( options.root || '/' )
        }

      },
      open: function( path, params ) { this._open( path, params ) }, // convenience for _open
      _open: function ( path, params ) {
        if ( options.bind ) {
          this._router._open( path, params )
        } else {
          var decoded = x.lib.decodePath( path );
          var mergedParams = Object.assign( decoded.queryParams, params );
          this._render( decoded.path, mergedParams );
        };
      },
      _render: function ( path, params ) {
        this.$components = [ viewContent( this, path, params ) ];
      }
    },
    options.attributes || {}
  );

  return a.controller( null, geneOptions );

};
