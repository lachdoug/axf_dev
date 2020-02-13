app.view.updating.os = ( controller ) => (a,x) => a['app-updating'](
  [
    a.h3( "Updating Operating system" ),
    app.system.polling(
      '/~/~/system/status',
      ( response, el ) => response.json().then( status => {
        if ( status.is_base_system_updating ) {
          throw new Error( 'OS updating' )
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
