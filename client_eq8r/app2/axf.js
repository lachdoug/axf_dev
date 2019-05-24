


app2.axf = (c) => (a,x) => [


  // return [
    x.appkit.router( {
      "/": app2.axf.root,
      "/get": app2.axf.get,
      "/examples**": app2.axf.examples,
      "/extensions**": app2.axf.extensions,
      // "/axf**": app2.axf,
      // "/examples/:page": function( params, controller ) {
      //   return app2.axf.examples[ params.page ]
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
  //   "/examples/:page": function( c ) {
  //     return app2.axf.examples[ c.params.page ]
  //   },
  // }, {
  //   transition: x.appkit.transition.fade,
  //   lost: "show",
  //   scope: "/axf",
  // } ),

  // "/examples/:page": function( params, controller ) {
  //   return app2.axf.examples[ params.page ]
  // },




]
