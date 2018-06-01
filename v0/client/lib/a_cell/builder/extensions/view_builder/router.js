AcellBuilderExtensionsViewBuilder.prototype.router = function( routes, options = {} ) {

  var a = this.cellBuilder.tagBuilder;

  var acellPages = [];

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

    acellPages.push( [ pathRegex, paramNames, content ] )

  } );

  var pageContent = function( target, path ) {

    // var route;
    var params = {};
    var content;
    for ( var i in acellPages ) {
      var page = acellPages[i];
      var pathRegex = new RegExp( page[0] )
      var match = path.match( pathRegex );
      // debugger
      if ( match ) {
        // debugger
        // pathRegex = pathRegexes[i];
        paramNames = page[1];
        content = page[2];

        paramNames.forEach( function( paramName, i ) {
          params[paramName] = match[ i + 1 ];
        } );

        break;

      };
    };

    // var page = {
    //   path: path,
    //   params: params,
    //   target: target
    //   // from:
    // }
// debugger;
    if ( typeof content === "function" ) {
      content = content( params, target );
    };
    // debugger
    return a.page( content, options.page );

    // if ( route ) {
    //   document.querySelector("aroot")._display( content() )
    // } else {
    //   console.error( `acell error: No route for '${path}'` );
    // }


  // debugger;

  };

  var geneOptions = Object.assign(
    {
      $init: function() {
        // debugger
        if ( options.bind ) {
          // debugger;
          this._controller = document.querySelector( options.bind )._bind(this);
          // this._render( this._controller._path );
          // window.addEventListener('popstate', function(event) {
          //   // debugger
          //   window.location.pathname === "/" && options.root ?
          //   //   this._open( options.root || '/' ) :
          //     window.history.back() :
          //     this._render( window.location.pathname );
          // }.bind( this ) );
          // window.location.pathname === '/' ?
          //   this._open( options.root || '/' ) :
          //   this._open( window.location.pathname )
        } else {
          this._render( options.root || '/' )
        }

      },
      _open: function ( path ) {
        // debugger
        if ( options.bind ) {
          this._controller._open( path )
          // history.pushState( { urlPath: path },"", path );
        } else {
          this._render( path );
        };


      },
      _render: function ( path ) {
        this.$components = [ pageContent( this, path ) ];
      }
    },
    options.cell || {}
  );

  // pass-in 'a' so acell() doesn't need to create its own cellbuilder.
  return a.pages( null, geneOptions );

// debugger;

  // document.querySelector( '#' + nodeId )

  // renderedContent( window.location.href || options.root || '/' );

// (\/test\/people\/)(:\w+)

};



// debugger;
