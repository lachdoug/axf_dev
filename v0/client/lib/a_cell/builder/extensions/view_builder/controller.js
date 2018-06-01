AcellBuilderExtensionsViewBuilder.prototype.controller = function( options = {} ) {

  var a = this.cellBuilder.tagBuilder;


      //     document.querySelector( options.bind )._bind(this);
      //     //
      //   } else {
      //     this._open( options.root || '/' )
      //   }
      //
      // },
      // _open: function ( path ) {
      //   // debugger

  var geneOptions = Object.assign(
    {
      id: options.id,
      $init: function () {

        if ( options.bind === "window" ) {
          // debugger;
          // Refresh pahes when back button pressed;
          window.addEventListener('popstate', function(event) {
            // debugger;
            if ( window.location.pathname === "/" && options.root ) {
              this._render( options.root )
            } else {
              this._render( window.location.pathname );
            };
          }.bind(this) );
        };

        if ( window.location.pathname === "/" && options.root ) {
          this._path = options.root;
        } else if ( options.bind === "window" ) {
          this._path = window.location.pathname;
        } else {
          this._path = "/";
        };

          // debugger
        //   window.location.pathname === "/" && options.root ?
        //   //   this._render( options.root || '/' ) :
        //     window.history.back() :
        //     this._renderContentFor( window.location.pathname );
        // }.bind( this ) );
        // window.location.pathname === '/' ?
        //   this._render( options.root || '/' ) :
        //   this._render( window.location.pathname )
      },
      _render: function ( path ) {
        this._path = path;
        this._pageGroups.forEach( function( pageGroup ) {
          pageGroup._render( path );
        } );
      },
      _open: function ( path ) {
        if ( options.bind === "window" ) {
          console.log("pushState");
          history.pushState( { urlPath: path },"", path );
          var popStateEvent = new PopStateEvent('popstate', { urlPath: path } );
          dispatchEvent(popStateEvent);
        };
        this._render( path );
      },
      _bind: function ( pageGroup ) {
        this._pageGroups.push( pageGroup );
        pageGroup._render( this._path );
        return this;
      },
      _pageGroups: [],
    },
    options.controllerCell
  )

  return a.controller( null, geneOptions );

};
