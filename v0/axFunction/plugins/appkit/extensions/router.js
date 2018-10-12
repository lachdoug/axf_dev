ax.extensions.router = function( options = {} ) {

  var a = ax.a;
  var x = this;

  var routerTag = Object.assign(
    {
      id: options.id,
      $init: function () {
        if ( options.bind === "window" ) {
          window.addEventListener('popstate', function(event) {
            if ( window.location.pathname === "/" && options.root ) {
              this.$render( options.root )
            } else {
              this.$render( window.location.pathname + window.location.search );
            };
          }.bind(this) );
        };

        if ( window.location.pathname === "/" && options.root ) {
          this.$path( options.root )
        } else if ( options.bind === "window" ) {
          this.$path( window.location.pathname + window.location.search );
        } else {
          this.$path( "/" );
        };

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
          console.log("pushState");
          history.pushState( { urlPath: path },"", path );
          var popStateEvent = new PopStateEvent('popstate', { urlPath: path } );
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
    options.routerTag
  )

  return a.router( null, routerTag );

};
