app.view.restarting = ( controller ) => (a,x) => a['app-restarting'](
  [
    a.h3( "Restarting system" ),
    app.system.polling(
      '/~/system/status',
      ( result, el ) =>  {
        if ( result.is_rebooting ) {
          throw new Error( 'Restarting' )
        } else {
          el.$send( 'app.reconnected' )
        }
      },
      {
        status: {
          503: ( result, el ) => el.$send( 'app.reconnected' )
        }
      }
    )
  ]
)
