app.view.updating = ( controller ) => (a,x) => a['app-updating'](
  [
    a.h3( "Updating system" ),
    app.system.polling(
      '/api/-/system/status',
      ( result, el ) =>  {
        if ( result.is_rebooting ) {
          el.$send( 'systemUpdating' )
        } else {
          el.$send( 'systemReconnected' )
        }
      },
      {
        // status: {
        //   // 503 Service Unavailable
        //   503: ( result, el ) => el.$send( 'systemReconnected' )
        // }
      }
    )
  ]
)
