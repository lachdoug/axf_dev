app.http = function( url, success, options={} ) {
  return (a,x) => x.http( {
    url: url,
    success: success,
    when: {
      401: ( response, el ) => el.$send( 'app.server.not.authenticated' ),
      418: ( response, el ) => el.$send( 'app.server.session.timeout' ),
      'text/terminal': ( response, el ) => response.text().then( result => {
        el.$nodes = app.xterm( { text: result } )
      } ),
      ...options.when
    },
    ...options,
  } )
}
