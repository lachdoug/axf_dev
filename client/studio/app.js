let app = (a,x) => a['app'](
  a['div.container']( [
    app.router,
    app.modal(),
  ] ),
  {
    $on: {
      'app.server.not.authenticated': (e,el) => {
        nav.$load( '/login' )
      },
      'app.server.session.timeout': (e,el) => {
        nav.$load( '/timeout' )
      },
      'appkit.router.load': (e,el) => {
        nav.$update()
        let noCheck = [ '/timeout', '/login', '/logout' ]
        if ( !noCheck.includes( e.detail.path ) ) nav.$timeoutCheck()
      },
    }
  }
)
