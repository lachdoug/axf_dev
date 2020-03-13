let app = (a,x) => a['app']( [
    app.modal(),
    a['div.container-fluid'](
      app.router,
    ),
  ], {
  $on: {
    'appkit.router.load': (e,el) => {
      nav.$update()
    },
    'app.authenticated': (e,el) => {
      el.$('^app app-nav').$setUser( true )
      nav.$reopen()
    },
    'app.unauthenticated': (e,el) => {
      el.$('^app app-nav').$setUser( false )
      el.$('app-system-eventsource').$close()
      nav.$load( '/login' )
    },
    'app.timeout': (e,el) => {
      el.$('^app app-nav').$setUser( false )
      el.$('app-system-eventsource').$close()
      nav.$load( '/timeout' )
    },
    'app.restarting': (e,el) => {
      el.$('^app app-nav').$setUser( false )
      el.$('app-system-eventsource').$close()
      nav.$open( '/restarting' )
    },
    'app.os.updating': (e,el) => {
      el.$('^app app-nav').$setUser( false )
      el.$('app-system-eventsource').$close()
      nav.$open( '/updating/os' )
    },
    'app.closedating': (e,el) => {
      el.$('^app app-nav').$setUser( false )
      el.$('app-system-eventsource').$close()
      nav.$open( '/updating' )
    },
    'app.disconnected': (e,el) => {
      el.$('^app app-nav').$setUser( false )
      el.$('app-system-eventsource').$close()
      nav.$load( '/disconnected' )
    },
    'app.reconnected': (e,el) => {
      location.assign( '/' )
    },
    'app.connected': (e,el) => {
      el.$('app-system-eventsource').$run()
    },
    'app.system.status.update': (e,el) => {
      let update = e.detail
      el.$$( 'app-system-state' ).forEach( el => {
        el.$state = { ...el.$state, ...update.status }
      } )
    },
    'app.container.status.update': (e,el) => {
      let update = e.detail
      let selector = `app-container-state[name='${ update.name }']`
      el.$$( selector ).forEach( el => {
        el.$state = { ...el.$state, status: update.status }
      } )
    },

  }
} )
