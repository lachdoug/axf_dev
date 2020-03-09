app.form = ( options={} ) => (a,x) => cc.form( {
  ...options,
  catch: options.catch || ( ( error, el ) => el.$send( 'app.disconnected' ) ),
  when: {
    418: ( response, el ) => el.$send( 'app.server.session.timeout' ),
    503: ( response, el ) => el.$send( 'app.disconnected' ),
    'text/terminal': ( response, el ) => response.text().then( result => {
      el.$nodes = app.xterm( {
        text: result,
        label: response.status == 500 ? a['.error']( 'Server error' ) : null,
        ...options.xterm,
      } )
    } ),
    ...options.when
  },
} )
