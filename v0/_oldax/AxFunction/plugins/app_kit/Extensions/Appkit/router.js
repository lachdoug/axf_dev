AxFunction.Extensions.prototype.router = function( options = {} ) {

  var a = this.a;
  var x = this;

  var attributes = Object.assign(
    {
      id: options.id,
      $init: function () {
        if ( options.bind === "window" ) {
          window.addEventListener('popstate', function(event) {
            if ( window.location.pathname === "/" && options.root ) {
              this.$renderView( options.root )
            } else {
              this.$renderView( window.location.pathname + window.location.search );
            };
          }.bind(this) );
        };

        if ( window.location.pathname === "/" && options.root ) {
          this.$setPath( options.root );
        } else if ( options.bind === "window" ) {
          this.$setPath( window.location.pathname + window.location.search );
        } else {
          this.$setPath( "/" );
        };

      },
      $renderView: function ( pathWithQueryString ) {
        this.$setPath( pathWithQueryString );
        this.$pageGroups.forEach( function( pageGroup ) {
          pageGroup.$renderView( this._path, this._queryParams );
        }.bind(this) );
      },
      $setPath: function( pathWithQueryString ) {
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

        if ( options.bind === "window" ) {
          console.log("pushState");
          history.pushState( { urlPath: path },"", path );
          var popStateEvent = new PopStateEvent('popstate', { urlPath: path } );
          dispatchEvent(popStateEvent);
        } else {
          this.$renderView( path );
        };
      },
      $bind: function ( pageGroup ) {
        this.$pageGroups.push( pageGroup );
        pageGroup.$renderView( this._path, this._queryParams );
        return this;
      },
      $pageGroups: [],
    },
    options.routerTag
  )

  return a.router( null, attributes );

};
