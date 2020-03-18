app.logout = controller => (a,x) => app.http(
  '/~/session',
  ( result, el  ) => {
    el.$send( 'app.unauthenticated' )
    el.$nodes = [
      a.h3( "Logged out" ),
      a.p(
        app.btn(
          app.icon( "fas fa-sign-in-alt", "Login" ),
          () => controller.load( '/login' )
        )
      )
    ] 
  },
  {
    method: 'delete',
  }
)
