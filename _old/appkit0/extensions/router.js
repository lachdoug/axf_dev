ax.extensions.router = function( options = {} ) {

  var a = ax.a;
  var x = this;

  options.root = options.root || "/"
  options.home = options.home || "/"

  var axRouterTag = Object.assign(
    {
      id: options.id,
      $init: function () {
        if ( options.bind === "window" ) {
          window.addEventListener('popstate', function(event) {
            // if ( window.location.pathname === options.home ) {
            //   this.$render( options.home )
            // } else {
              // debugger
              let location = window.location.pathname.replace( options.root ,'' ) + window.location.search
              this.$render( location );
            // };
          }.bind(this) );
        };

        // if ( window.location.pathname === options.home ) {
        //   this.$path( options.root )
        // } else if ( options.bind === "window" ) {
          let location = window.location.pathname.replace( options.root, '' )
          location = location || options.home

          location = location + window.location.search
          // debugger
          this.$path( location );
        // } else {
        //   this.$path( "/" );
        // };

      },
      $render: function ( pathWithQueryString ) {
        this.$path( pathWithQueryString );
        this.$controllers.forEach( function( pageGroup ) {
          pageGroup.$render( this._path, this._queryParams );
        }.bind(this) );
      },
      $path: function( pathWithQueryString ) {
        var decoded = x.appkit.lib.decodePath( pathWithQueryString );
        this._path = decoded.path;
        this._queryParams = decoded.queryParams;
      },
      $open: function ( path, params ) {
        if ( params ) {
          var queryString = x.appkit.lib.objectToQueryString( params );
          if ( path.includes( "?" ) ) {
            path += "&" + queryString;
          } else {
            path += "?" + queryString;
          };
        };

        if ( options.bind === "window" || options.bind === window ) {
          urlPath = options.root + path
          console.log(urlPath);
          history.pushState( { urlPath: urlPath },"", urlPath );
          var popStateEvent = new PopStateEvent('popstate', { urlPath: urlPath } );
          dispatchEvent(popStateEvent);
        } else {
          this.$render( path );
        };
      },
      $bind: function ( pageGroup ) {
        this.$controllers.push( pageGroup );
        pageGroup.$render( this._path, this._queryParams );
        return this;
      },
      $controllers: [],
    },
    options.axRouterTag
  )

  return a['.router']( null, axRouterTag );

};
