app.system.updateOS = ( controller ) => (a,x) => a['app-system-update-os'](
  [
    a.h3( "Shutdown" ),
    app.form( {
      action: '/~/~/system/control/base_os/shutdown',
      form: (f) => [
        // f.field( { key: 'user_name', value: 'engines', type: 'hidden' } ),
        f.textarea( { name: 'api_vars[reason]', placeholder: 'Reason for shutdown' } ),
        a.br,
        f.submit( {
          label: app.icon( 'fa fa-check', 'OK' ),
          class: 'btn btn-primary'
        } ),
      ]
    } )
  ]
)
