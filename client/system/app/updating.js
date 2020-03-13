app.closedating = controller => (a,x) => [
  a.h3( "Updating system" ),
  app.system.polling(
    '/~/~/system/status',
    ( status, el ) => {
      if ( status.is_engines_system_updating ) {
        el.$('^app-polling').$wait()
      } else {
        el.$send( 'app.reconnected' )
      }
    },
    {
      // status: {
      //   // 503 Service Unavailable
      //   503: ( result, el ) => el.$send( 'app.reconnected' )
      // }
    }
  )
]
