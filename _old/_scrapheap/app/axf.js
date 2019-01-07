app.axf = () => (a,x) => [
  a.h1("The Ax Function"),
  app.btn( "Guide", () => app.open('/guide/hello_world'), "link" ),
  app.btn( "Appkit", () => app.open('/appkit'), "link" ),
  a.hr,
  x.appkit.controller( {
    "/": "Welcome to Ax.",
    "/guide/:page": function( params, controller ) {
      return app.axf.guide[ params.page ]
    },
    // "/dev": this.dev(a,x),
  }, {
    bind: "appkit-router",
    transition: x.appkit.transition.fade,
    lost: "show",
    scope: "/axf",
  } ),

  // "/guide/:page": function( params, controller ) {
  //   return app.axf.guide[ params.page ]
  // },

]
