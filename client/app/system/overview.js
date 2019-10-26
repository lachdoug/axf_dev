
app.system.overview = ( controller ) => (a,x) => a['app-system-overview']( [

  a['div.container']( [
    a.h6( 'System status' ),
    app.http(
      '/api/-/system/status',
      ( result, el ) => el.$nodes = x.appkit.list( result.content )
    ),
  ] ),
  a.hr,

  a['div.container']( [
    app.btn( app.icon( 'fas fa-stethoscope', 'Checkup' ), (e,el) => el.nextSibling.$nodes = app.http(
      '/api/-/containers/check_and_act',
      ( result, el ) => el.$nodes = x.appkit.list( result.content )
    ) ),
    a['app-test-btn-result'](),
  ] ),
  a.hr,

  a['div.container']( [
    app.btn( app.icon( 'fas fa-redo', 'Update OS' ), (e,el) => el.nextSibling.$nodes = app.http(
      '/api/-/system/control/base_os/update',
      ( result, el ) => el.$nodes = x.appkit.list( result.content )
    ) ),
    a['app-test-btn-result'](),
  ] ),
  a['div.container']( [
    app.btn( app.icon( 'fas fa-redo', 'Update Engines' ), (e,el) => el.nextSibling.$nodes = app.http(
      '/api/-/system/control/engines_system/update',
      ( result, el ) => el.$nodes = x.appkit.list( result.content )
    ) ),
    a['app-test-btn-result'](),
  ] ),
  a.hr,

  // a.hr,
  // a.h3('Bad route'),
  // app.http( '/api/-/bad_route' ),
  // a.hr,
  // app.http(
  //   '/api/-/containers/engine/ldapadmin/logs',
  //   ( logs, el  ) => {
  //     el.$nodes = [
  //       a.h3('App logs'),
  //       a.h4('Out'),
  //       app.xterm( { text: logs.stdout } ),
  //       a.h4('Error'),
  //       app.xterm( { text: logs.stderr } ),
  //     ]
  //   }
  // ),

  a['div.container']( [
    app.btn( 'GETs', (e,el) => el.nextSibling.$nodes = [
      [ a.h5( '/api/-/system/certs/default' ), app.http( '/api/-/system/certs/default' ), a.br ],
      [ a.h5( '/api/-/system/certs/' ), app.http( '/api/-/system/certs/' ), a.br ],
      [ a.h5( '/api/-/system/certs/service_certs' ), app.http( '/api/-/system/certs/service_certs' ), a.br ],
      [ a.h5( '/api/-/system/config/default_domain' ), app.http( '/api/-/system/config/default_domain' ), a.br ],
      [ a.h5( '/api/-/system/config/default_site' ), app.http( '/api/-/system/config/default_site' ), a.br ],
      [ a.h5( '/api/-/system/config/hostname' ), app.http( '/api/-/system/config/hostname' ), a.br ],
      [ a.h5( '/api/-/system/config/remote_exception_logging' ), app.http( '/api/-/system/config/remote_exception_logging' ), a.br ],
      [ a.h5( '/api/-/system/status/first_run_required' ), app.http( '/api/-/system/status/first_run_required' ), a.br ],
      [ a.h5( '/api/-/system/status/update' ), app.http( '/api/-/system/status/update' ), a.br ],
      [ a.h5( '/api/-/system/domains/' ), app.http( '/api/-/system/domains/' ), a.br ],
      [ a.h5( '/api/-/system/metrics/disks' ), app.http( '/api/-/system/metrics/disks' ), a.br ],
      [ a.h5( '/api/-/system/metrics/load' ), app.http( '/api/-/system/metrics/load' ), a.br ],
      [ a.h5( '/api/-/system/metrics/memory' ), app.http( '/api/-/system/metrics/memory' ), a.br ],
      [ a.h5( '/api/-/system/metrics/memory/statistics' ), app.http( '/api/-/system/metrics/memory/statistics' ), a.br ],
      [ a.h5( '/api/-/system/metrics/network' ), app.http( '/api/-/system/metrics/network' ), a.br ],
      [ a.h5( '/api/-/system/version/api' ), app.http( '/api/-/system/version/api' ), a.br ],
      [ a.h5( '/api/-/system/version/base_os' ), app.http( '/api/-/system/version/base_os' ), a.br ],
      [ a.h5( '/api/-/system/version/ident' ), app.http( '/api/-/system/version/ident' ), a.br ],
      [ a.h5( '/api/-/system/version/release' ), app.http( '/api/-/system/version/release' ), a.br ],
      [ a.h5( '/api/-/system/version/system' ), app.http( '/api/-/system/version/system' ), a.br ],
      [ a.h5( '/api/-/system/reserved/engine_names' ), app.http( '/api/-/system/reserved/engine_names' ), a.br ],
      [ a.h5( '/api/-/system/reserved/hostnames' ), app.http( '/api/-/system/reserved/hostnames' ), a.br ],
      [ a.h5( '/api/-/system/reserved/ports' ), app.http( '/api/-/system/reserved/ports' ), a.br ],
      [ a.h5( '/api/-/system/system_user/settings' ), app.http( '/api/-/system/system_user/settings' ), a.br ],
      [ a.h5( '/api/-/system/bootstrap/mgmt_url' ), app.http( '/api/-/system/bootstrap/mgmt_url' ), a.br ],
      [ a.h5( '/api/-/system/control/base_os/locale' ), app.http( '/api/-/system/control/base_os/locale' ), a.br ],
      [ a.h5( '/api/-/system/control/base_os/locale' ), app.http( '/api/-/system/control/base_os/locale' ), a.br ],
      [ a.h5( '/api/-/system/control/engines_system/dump_threads' ), app.http( '/api/-/system/control/engines_system/dump_threads' ), a.br ],
      [ a.h5( '/api/-/system/control/engines_system/heap_stats' ), app.http( '/api/-/system/control/engines_system/heap_stats' ), a.br ],
      [ a.h5( '/api/-/system/certs/default' ), app.http( '/api/-/system/certs/default' ), a.br ],
      [ a.h5( '/api/-/system/config/default_domain' ), app.http( '/api/-/system/config/default_domain' ), a.br ],
      [ a.h5( '/api/-/system/control/engines_system/dump_threads' ), app.http( '/api/-/system/control/engines_system/dump_threads' ), a.br ],
      [ a.h5( '/api/-/system/control/engines_system/heap_stats' ), app.http( '/api/-/system/control/engines_system/heap_stats' ), a.br ],
      [ a.h5( '/api/-/system/control/base_os/locale' ), app.http( '/api/-/system/control/base_os/locale' ), a.br ],
      [ a.h5( '/api/-/system/config/default_site' ), app.http( '/api/-/system/config/default_site' ), a.br ],
      [ a.h5( '/api/-/system/config/hostname' ), app.http( '/api/-/system/config/hostname' ), a.br ],
      [ a.h5( '/api/-/system/bootstrap/mgmt_url' ), app.http( '/api/-/system/bootstrap/mgmt_url' ), a.br ],
      [ a.h5( '/api/-/system/config/remote_exception_logging' ), app.http( '/api/-/system/config/remote_exception_logging' ), a.br ],
      [ a.h5( '/api/-/system/metrics/disks' ), app.http( '/api/-/system/metrics/disks' ), a.br ],
      [ a.h5( '/api/-/system/metrics/load' ), app.http( '/api/-/system/metrics/load' ), a.br ],
      [ a.h5( '/api/-/system/metrics/memory' ), app.http( '/api/-/system/metrics/memory' ), a.br ],
      [ a.h5( '/api/-/system/metrics/memory/statistics' ), app.http( '/api/-/system/metrics/memory/statistics' ), a.br ],
      [ a.h5( '/api/-/system/metrics/network' ), app.http( '/api/-/system/metrics/network' ), a.br ],
      [ a.h5( '/api/-/system/reserved/engine_names' ), app.http( '/api/-/system/reserved/engine_names' ), a.br ],
      [ a.h5( '/api/-/system/reserved/hostnames' ), app.http( '/api/-/system/reserved/hostnames' ), a.br ],
      [ a.h5( '/api/-/system/reserved/ports' ), app.http( '/api/-/system/reserved/ports' ), a.br ],
      [ a.h5( '/api/-/system/status' ), app.http( '/api/-/system/status' ), a.br ],
      [ a.h5( '/api/-/system/status/first_run_required' ), app.http( '/api/-/system/status/first_run_required' ), a.br ],
      [ a.h5( '/api/-/system/system_user/settings' ), app.http( '/api/-/system/system_user/settings' ), a.br ],
      [ a.h5( '/api/-/system/status/update' ), app.http( '/api/-/system/status/update' ), a.br ],
      [ a.h5( '/api/-/system/version/api' ), app.http( '/api/-/system/version/api' ), a.br ],
      [ a.h5( '/api/-/system/version/base_os' ), app.http( '/api/-/system/version/base_os' ), a.br ],
      [ a.h5( '/api/-/system/version/ident' ), app.http( '/api/-/system/version/ident' ), a.br ],
      [ a.h5( '/api/-/system/version/release' ), app.http( '/api/-/system/version/release' ), a.br ],
      [ a.h5( '/api/-/system/version/system' ), app.http( '/api/-/system/version/system' ), a.br ],
      [ a.h5( '/api/-/system/certs/' ), app.http( '/api/-/system/certs/' ), a.br ],
      [ a.h5( '/api/-/system/domains/' ), app.http( '/api/-/system/domains/' ), a.br ],
      [ a.h5( '/api/-/system/certs/service_certs' ), app.http( '/api/-/system/certs/service_certs' ), a.br ],
      [ a.h5( '/api/-/system/control/base_os/locale' ), app.http( '/api/-/system/control/base_os/locale' ), a.br ],
      // app.http('/api/-/containers/engines/clear_lost'),
      [ a.h5( '/api/-/containers/engines/' ), app.http( '/api/-/containers/engines/' ), a.br ],
      [ a.h5( '/api/-/containers/engines/container_name' ), app.http( '/api/-/containers/engines/container_name' ), a.br ],
      [ a.h5( '/api/-/containers/engines/state' ), app.http( '/api/-/containers/engines/state' ), a.br ],
      [ a.h5( '/api/-/containers/engines/status' ), app.http( '/api/-/containers/engines/status' ), a.br ],

      [ a.h5( '/api/-/containers/services/' ), app.http( '/api/-/containers/services/' ), a.br ],
      [ a.h5( '/api/-/containers/services/state' ), app.http( '/api/-/containers/services/state' ), a.br ],
      [ a.h5( '/api/-/containers/services/status' ), app.http( '/api/-/containers/services/status' ), a.br ],
      [ a.h5( '/api/-/containers/services/system' ), app.http( '/api/-/containers/services/system' ), a.br ],

    ] ),
    a['app-test-btn-result'](),
  ] ),
  a.hr,

  //
  // a.h3('Engines/Applications'),
  //
  //
  // a.h3('Services'),
  //


  // app.btn( 'export', (e,el) => el.nextSibling.$nodes = app.http('/api/-/containers/service/volmgr/export') ),
  // a['app-test-btn-result'](),


  // a.hr,
  // app.http(
  //   '/api/-/containers/service/volmgr/logs',
  //   ( logs, el ) => {
  //     el.$nodes = [
  //       a.h3('Service logs'),
  //       a.h4('Out'),
  //       app.xterm( { text: logs.stdout } ),
  //       a.h4('Error'),
  //       app.xterm( { text: logs.stderr } ),
  //     ]
  //   }
  // ),
  // a.hr,

  a['div.container']( [

    a.h3('Builder' ),

    app.http(
      '/api/-/engine_builder/status',
      ( result, el ) => el.$nodes = x.appkit.list( result.content )
    ),


    app.xterm( { label: 'Builder log' } ),
    a['appkit-event-source']( {
      $init: function() {
  			this.$eventsource = new EventSource( '/api/eventsource/builder' )
  			this.$eventsource.onmessage = function(e) {
  				var line = e.data
          if ( line == String.fromCharCode(4) ) this.$complete()
          if ( line ) this.previousSibling.$write( `${ line }\r\n` )
  			}.bind( this )
        this.$eventsource.onerror = function(e) {
          // Timeout to stop error when eventstream exits on new page load.
          setTimeout( () => {
            ax.log.error( `Builder log events stream ${ this.$started } - Unexpected error.` )
            this.$eventsource.close()
          }, 1000 )

        }.bind( this )
      },
      $complete: function() {
        this.$eventsource.close()
        this.$nodes = a.h5('Install complete.')
      },
    } ),
  ] ),
  a.hr,

  a['div.container']( [
    app.btn( app.icon( "fas fa-power-off", "Shutdown" ), () => controller.open( '/system/shutdown' ) ),
    app.btn( app.icon( "fas fa-recycle", "Restart" ), () => controller.open( '/system/restart' ) ),
  ] ),



] )
