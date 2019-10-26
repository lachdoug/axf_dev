app.system.restart = ( controller ) => (a,x) => a['app-system-restart'](
  [
    a.h3( "Restart system" ),
    a.p( "Reboot the machine?" ),
    app.btn( app.icon( "fa fa-times", "Cancel" ), (e,el) => controller.open( '/system' ) ),
    app.btn(
      app.icon( "fa fa-check", "OK" ),
      (e,el) => {
        el.$('^app-system-restart app-system-restart-http').$nodes = app.http(
          '/api/-/system/control/base_os/restart',
          () => { el.$send( 'systemRestarting' ) },
          {
            placeholder: "HTTP",
            status: {
              503: ( result, el ) => el.$send( 'systemRestarting' ),
            }
          }
        )
      }
    ),
    a['app-system-restart-http'],
  ]
)
