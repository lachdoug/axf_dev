ax.extensions.controller = function( routes, options = {} ) {

  var a = ax.a;
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

  var controllerTag = Object.assign(
    {
      id: options.id,
      _location: {},
      $init: function() {
        if ( options.bind ) {
          this.$router = document.querySelector( options.bind ).$bind(this);
        } else {
          this.$render( options.root || '/' )
        }

      },
      // open: function( path, params ) { this.$open( path, params ) }, // convenience for $open
      $open: function ( path, params ) {
        if ( options.bind ) {
          this.$router.$open( path, params )
        } else {
          var decoded = x.appkit.lib.decodePath( path );
          var mergedParams = Object.asssign( decoded.queryParams, params );
          this.$render( decoded.path, mergedParams );
        };
      },
      $render: function( path, params ) {
        this._location = {
          path: path,
          params: params
        }
      },
      $components: options.transition ? [ options.transition() ] : [],
      $update: function () {
        if ( options.transition ) {
            this.$('transition')[0].$to( this.$view() )
        } else {
          this.$components = [ this.$view() ]
        }
      },
      $view: function() {

        let path = this._location.path;
        let params = this._location.params || {};
        let content;
        for ( let i in views ) {
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
          content = content( params, this );
        };

        return a.view( content, options.viewTag );

      },



    },
    options.controllerTag || {}
  );
// debugger;
  return a.controller( null, controllerTag );

};
