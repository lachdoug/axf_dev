AxFrameworkExtensions.prototype.router = function( options = {} ) {

  var a = this.a;
  var x = this;

  var attributes = Object.assign(
    {
      id: options.id,
      $init: function () {
        if ( options.bind === "window" ) {
          window.addEventListener('popstate', function(event) {
            if ( window.location.pathname === "/" && options.root ) {
              this._render( options.root )
            } else {
              this._render( window.location.pathname + window.location.search );
            };
          }.bind(this) );
        };

        if ( window.location.pathname === "/" && options.root ) {
          this._setPath( options.root );
        } else if ( options.bind === "window" ) {
          this._setPath( window.location.pathname + window.location.search );
        } else {
          this._setPath( "/" );
        };

      },
      _render: function ( pathWithQueryString ) {
        this._setPath( pathWithQueryString );
        this._pageGroups.forEach( function( pageGroup ) {
          pageGroup._render( this._path, this._queryParams );
        }.bind(this) );
      },
      _setPath: function( pathWithQueryString ) {
        var decoded = x.lib.decodePath( pathWithQueryString );
        this._path = decoded.path;
        this._queryParams = decoded.queryParams;
      },
      open: function( path, params ) { this._open( path ) },
      _open: function ( path, params ) {
        if ( params ) {
          var queryString = x.lib.objectToQueryString( params );
          if ( path.includes( "?" ) ) {
            path += "&" + queryString;
          } else {
            path += "?" + queryString;
          };
        };

        if ( options.bind === "window" ) {
          console.log("pushState");
          history.pushState( { urlPath: path },"", path );
          var popStateEvent = new PopStateEvent('popstate', { urlPath: path } );
          dispatchEvent(popStateEvent);
        } else {
          this._render( path );
        };
      },
      _bind: function ( pageGroup ) {
        this._pageGroups.push( pageGroup );
        pageGroup._render( this._path, this._queryParams );
        return this;
      },
      _pageGroups: [],
    },
    options.routerTag
  )

  return a.router( null, attributes );

};
