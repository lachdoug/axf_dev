let app = (a,x) => a['div|app.container'](
  [
    app.router,
    app.modal(),
  ],
  {
    $on: {
      'app.server.not.authenticated': (e,el) => {
        nav.$load( '/login' )
      },
      'app.server.session.timeout': (e,el) => {
        nav.$load( '/timeout' )
      },
      'appkit.router.open': (e,el) => {
        nav.$update()
      },
    }
  }
)
