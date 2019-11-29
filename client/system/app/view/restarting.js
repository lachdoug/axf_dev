app.view.restarting = ( controller ) => (a,x) => a['app-restarting'](
  [
    a.h3( "Restarting system" ),
    app.system.polling(
      '/~/system/status',
      ( result, el ) =>  {
        if ( result.is_rebooting ) {
          el.$send( 'systemRestarting' )
        } else {
          el.$send( 'systemReconnected' )
        }
      },
      {
        status: {
          503: ( result, el ) => el.$send( 'systemReconnected' )
        }
      }
    )
  ]
)
