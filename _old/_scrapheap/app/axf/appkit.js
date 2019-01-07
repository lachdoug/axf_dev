app.axf.appkit = () => (a,x) => {

  return [
    a.h1("Appkit"),
    x.appkit.controller( {
      "/": "Welcome to Appkit.",
      "/guide/:page": function( params, controller ) {
        return app.axf.appkit.guide[ params.page ]
      },
      // "/dev": this.dev(a,x),
    }, {
      bind: "appkit-router",
      transition: x.appkit.transition.fade,
      lost: "show",
      scope: "/appkit",
    } ),
  ]
}
