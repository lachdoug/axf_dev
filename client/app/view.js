app.view = (a,x) => a['app-view']( a['div.container-fluid'](
  x.appkit.router( ( controller ) =>
    a['app-events'](
      [
        app.system.eventsource,
        app.view.routes( controller ),
      ],
      {
        $on: {
          'systemNotAuthenticated': (e,el) => {
            controller.open( '!/login' )
          },
          'systemSessionTimeout': (e,el) => {
            el.$('app-system-eventsource').$close()
            // $stashedHREF = controller.href
            controller.open( '!/timeout' )
          },
          'systemRestarting': (e,el) => {
            el.$('app-system-eventsource').$close()
            // $stashedHREF = controller.href
            controller.open( '/restarting' )
          },
          'systemDisconnected': (e,el) => {
            el.$('app-system-eventsource').$close()
            // $stashedHREF = controller.href
            controller.open( '/disconnected' )
          },
          'systemUpdating': (e,el) => {
            el.$('app-system-eventsource').$close()
            // $stashedHREF = controller.href
            controller.open( '/updating' )
          },
          'systemReconnected': (e,el) => {
            document.location.href = '/system'
          },
          'containerStatusUpdate': (e,el) => {
            let update = e.detail
            // debugger
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
