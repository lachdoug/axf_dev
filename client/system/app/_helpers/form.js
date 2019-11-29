app.form = ( options={} ) => cc.form( {
  ...options,
  catch: options.catch || ( ( error, el ) => el.$send( 'systemDisconnected' ) ),
  when: {
    401: ( response, el ) => el.$send( 'app.server.not.authenticated' ),
    418: ( response, el ) => el.$send( 'app.server.session.timeout' ),
    503: ( response, el ) => el.$send( 'systemDisconnected' ),
    'text/terminal': ( response, el ) => response.text().then( result => {
      el.$nodes = cc.xterm( { text: result } )
    } ),
    ...options.when
  },
} )
