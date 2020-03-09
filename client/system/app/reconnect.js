app.reconnect = controller => (a,x) => [
  a.h3( "Reconnect" ),
  app.system.polling(
    '/~/reconnected',
    ( result, el ) => el.$send( 'app.reconnected' )
  )
]
