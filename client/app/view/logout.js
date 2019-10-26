app.view.logout = ( controller ) => (a,x) => a['app-logout'](
  app.http(
    '/api/login',
    ( result, el  ) => {
      el.$nodes = a.$$.p(
        a.h3( "Logged out" ),
        app.btn( app.icon( "fas fa-sign-in-alt", "Login" ), () => controller.open( '!/login' ) )
      )
    },
    {
      method: 'delete',
    }
  )
)
