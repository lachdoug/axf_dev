app.system = controller => (a,x) => a( {
  $init: function(el) {
    el.$nodes = app.http( [
      '/~/~/system/status',
      '/~/~/engine_builder/status',
      '/~/~/system/system_user/settings',
      '/~/~/system/config/hostname',
      '/~/~/system/version/ident',
      '/~/~/system/version/base_os',
    ], ( [ status, installer, settings, hostname, version, os ] ) => {

      el.$send( 'app.connected' )

      let system = {
        ...status,
        ...installer,
        ...settings,
        hostname: hostname,
        version: version,
        os: os,
      }

      if ( system.is_rebooting ) {
        el.$send( 'app.restarting' )
      } else if ( system.is_base_system_updating ) {
        el.$send( 'app.os.updating' )
      } else if ( system.is_engines_system_updating ) {
        el.$send( 'app.updating' )
      }

      el.$nodes = app.system.panes( system, controller )

    }, {
      placeholder: a['div.text-center.mt-4']( app.hourglass( 'Loading system' ) )
    } )
  },
} ),
