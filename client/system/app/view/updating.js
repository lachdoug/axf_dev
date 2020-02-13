app.view.updating = ( controller ) => (a,x) => a['app-updating'](
  [
    a.h3( "Updating system" ),
    app.system.polling(
      '/~/~/system/status',
      ( response, el ) => response.json().then( status => {
        if ( status.is_engines_system_updating ) {
          throw new Error( 'System updating' )
        } else {
          el.$send( 'app.reconnected' )
        }
      } ),
      {
        // status: {
        //   // 503 Service Unavailable
        //   503: ( result, el ) => el.$send( 'app.reconnected' )
        // }
      }
    )
  ]
)
