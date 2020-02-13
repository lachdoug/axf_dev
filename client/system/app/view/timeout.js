app.view.timeout = ( controller ) => (a,x) => a['app-timeout']( [
  a.h3( "Time out" ),
  app.btn(
    app.icon( "fas fa-sign-in-alt", "Login" ),
    () => controller.load( '/login' )
  )
] )
