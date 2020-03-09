app.timeout = controller => (a,x) => [
  a.h3( "Time out" ),
  app.btn(
    app.icon( "fas fa-sign-in-alt", "Login" ),
    () => controller.load( '/login' )
  )
]
