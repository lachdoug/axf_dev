app.view.timeout = ( controller ) => (a,x) => a['app-timeout']( [
  a.h3( "Timed out" ),
  app.btn( app.icon( "fas fa-sign-in-alt", "Login" ), () => controller.open( '!/login' ) )
] )
