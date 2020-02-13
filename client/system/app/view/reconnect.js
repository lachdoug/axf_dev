app.view.reconnect = ( controller ) => (a,x) => a['app-reconnect'](
  [
    a.h3( "Reconnect" ),
    app.system.polling(
      '/~/reconnected',
      ( result, el ) => el.$send( 'app.reconnected' )
    )
  ]
  
)
