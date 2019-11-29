cc.form = ( options={} ) => (a,x) => x.form( {
  shims: [
    x.form.field.shim(),
    x.form.field.extras.shim(),
    x.form.field.dependent.shim(),
    x.form.field.nest.shim(),
    x.form.field.nest.prefab.shim(),
    x.bootstrap.form.shim(),
    x.form.async.shim(),
    cc.form.shim
  ],
  ...options,
  // when: {
  //   401: ( response, el ) => el.$send( 'app.server.not.authenticated' ),
  //   418: ( response, el ) => el.$send( 'app.server.session.timeout' ),
  //   // 503: ( response, el ) => el.$send( 'systemDisconnected' ),
  //   'text/terminal': ( response, el ) => response.text().then( result => {
  //     el.$nodes = app.xterm( { text: result } )
  //   } ),
  //   ...options.when
  // },
} )
