app.view.disconnected = ( controller ) => (a,x) => a['app-disconnected'](
  [
    a.h3( "Reconnect" ),
    app.system.polling(
      '/api/reconnected',
      ( result, el ) => el.$send( 'systemReconnected' )
    )
  ],
  {
    // $init: (el) => setTimeout(
    //   () => {
    //     debugger
    //     app.http( '/api/-/system/status', (e,el) => {
    //       return el.$send( 'systemReconnected' )
    //     } )
    //   },
    //   1000
    // )
  }
)
