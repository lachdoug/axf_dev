app.view = (a,x) => a['app-view']( a['div.container-fluid'](
  x.router( ( controller ) =>
    a['app-events'](
      [
        app.nav( controller ),
        app.system.eventsource,
        app.view.routes( controller ),
      ],
      {
        $on: {
          'systemNotAuthenticated': (e,el) => {
            controller.load( '/login' )
          },
          'systemSessionTimeout': (e,el) => {
            el.$('app-system-eventsource').$close()
            controller.load( '/timeout' )
          },
          'systemRestarting': (e,el) => {
            el.$('app-system-eventsource').$close()
            controller.load( '/restarting' )
          },
          'systemDisconnected': (e,el) => {
            el.$('app-system-eventsource').$close()
            controller.load( '/disconnected' )
          },
          'systemUpdating': (e,el) => {
            el.$('app-system-eventsource').$close()
            controller.open( '/updating' )
          },
          'systemReconnected': (e,el) => {
            document.location.href = '/system'
          },
          'containerStatusUpdate': (e,el) => {
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
