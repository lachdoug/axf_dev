


app.axf = (c) => (a,x) => [


  // return [
    x.appkit.router( {
      "/": app.axf.root,
      "/guide**": app.axf.guide,
      "/extensions**": app.axf.extensions,
      // "/axf**": app.axf,
      // "/guide/:page": function( params, controller ) {
      //   return app.axf.guide[ params.page ]
      // },
      // "/dev": this.dev(a,x),
    }, {
      // transition: x.appkit.transition.fade,
      lost: "show"
    } )
  // ]
  //
  //
  //
  //



  // a.p( "Axf Guide" ),
  // // a.hr,
  // x.appkit.router( {
  //   "/": "Welcome to Ax.",
  //   "/guide/:page": function( c ) {
  //     return app.axf.guide[ c.params.page ]
  //   },
  // }, {
  //   transition: x.appkit.transition.fade,
  //   lost: "show",
  //   scope: "/axf",
  // } ),

  // "/guide/:page": function( params, controller ) {
  //   return app.axf.guide[ params.page ]
  // },




]
