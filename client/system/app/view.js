app.view = (a,x) => a['app-view']( a['div.container-fluid'](
  x.router( ( controller ) =>
    a['app-events'](
      [
        app.nav( controller ),
        app.system.eventsource,
        app.view.routes( controller ),
      ],
      {
        $init: (el) => el.$('app-system-eventsource').$run(),
        $on: {

          'app.authenticated': (e,el) => {
            el.$('^app app-nav').$setUser( true )
            controller.open()
          },
          'app.unauthenticated': (e,el) => {
            el.$('^app app-nav').$setUser( false )
            el.$('app-system-eventsource').$close()
            controller.load( '/login' )
          },
          'app.timeout': (e,el) => {
            el.$('^app app-nav').$setUser( false )
            el.$('app-system-eventsource').$close()
            controller.load( '/timeout' )
          },
          'app.restarting': (e,el) => {
            el.$('^app app-nav').$setUser( false )
            el.$('app-system-eventsource').$close()
            controller.load( '/restarting' )
          },
          'app.os.updating': (e,el) => {
            el.$('^app app-nav').$setUser( false )
            el.$('app-system-eventsource').$close()
            controller.load( '/updating/os' )
          },
          'app.updating': (e,el) => {
            el.$('^app app-nav').$setUser( false )
            el.$('app-system-eventsource').$close()
            controller.load( '/updating' )
          },
          'app.disconnected': (e,el) => {
            el.$('^app app-nav').$setUser( false )
            el.$('app-system-eventsource').$close()
            controller.load( '/disconnected' )
          },
          'app.reconnected': (e,el) => {
            location.reload()
          },
          'app.system.status.update': (e,el) => {
            let update = e.detail
            el.$$( 'app-system-state' ).$state = update.status
          },
          'app.container.status.update': (e,el) => {
            let update = e.detail
            el.$$(
              `app-container-state[name='${ update.type }_${ update.name }']`
            ).$state = update.status
          },
        }
      }
    ),{
      home: '/system',

    }
  )
) )
