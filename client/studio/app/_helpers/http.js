app.http = function( route, success, options={} ) {
  // debugger
  return (a,x) => x.http( {
    url: route,
    success: success,
    when: {
      401: ( response, el ) => el.$send( 'app.server.not.authenticated' ),
      418: ( response, el ) => el.$send( 'app.server.session.timeout' ),
      // 503: ( response, el ) => el.$send( 'systemDisconnected' ),
      'text/terminal': ( response, el ) => response.text().then( result => {
        el.$nodes = app.xterm( { text: result } )
      } ),
      ...options.when
    },
    // catch: ( error, el ) => el.$send( 'systemDisconnected' ),
    ...options,
  } )
}
