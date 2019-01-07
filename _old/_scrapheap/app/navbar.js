app.navbar = function(a,x) {

  return a.navbar( [
    app.btn( app.fa("home"), () => app.open('/'), "outline-secondary" ),
    // x.appkit.controller( {
    //   "/": function( params, controller ) {
    //     return btn( fa( "book", "Guide" ), () => open('/guide/hello_world'), "outline-secondary" )
    //   },
    //   "/guide/:page": function( params, controller ) {
    //     return app.navbar.guide( params.page )
    //   },
    // }, { bind: "appkit-router" } ),
    // a.hr
  ] )

}
