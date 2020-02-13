app.system.shutdown = ( controller ) => (a,x) => a['app-system-shutdown'](
  [
    a.h3( "Shutdown system" ),
    app.form( {
      url: '/~/~/system/control/base_os/shutdown',
      success: ( response, el ) => el.$send( 'app.disconnected' ),
      form: (f) => [
        // f.field( { key: 'user_name', value: 'engines', type: 'hidden' } ),
        f.textarea( { name: 'api_vars[reason]', placeholder: 'Reason for shutdown' } ),
        a.br,
        f.buttons( {
          cancel: {
            onclick: () => controller.open()
          }
        } ),
      ]
    } )
  ]
)
