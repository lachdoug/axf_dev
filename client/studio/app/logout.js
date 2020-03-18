app.logout = controller => (a,x) => app.http(
  '/~/session',
  ( result, el  ) => {
    nav.$setUser( false ),
    el.$nodes = a.$$.p(
      a.h3( "Logged out" ),
      app.button( {
        label: app.icon( "fas fa-sign-in-alt", "Login" ),
        onclick: () => controller.load( '/login' )
      } )
    )
  },
  {
    method: 'delete',
  }
)
