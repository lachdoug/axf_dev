app.system.overview = ( controller ) => (a,x) => a['app-system-overview']( [

  // a['div.container']( [
    app.btn(
      app.icon( 'fa fa-plus', 'Install' ),
      (e,el) => controller.open( 'install' ) ),
  // ] ),
  // a.hr,

  // a['div.container']( [
    a.h6( 'System status' ),
    app.http(
      '/~/~/system/status',
      ( result, el ) => el.$nodes = x.list( result.content )
    ),
  // ] ),
  // a.hr,


  // a['div.container']( [
    app.btn( app.icon( 'fas fa-stethoscope', 'Checkup' ), (e,el) => el.nextSibling.$nodes = app.http(
      '/~/~/containers/check_and_act',
      ( result, el ) => el.$nodes = x.list( result.content )
    ) ),
    a['app-test-btn-result'](),
  // ] ),
  // a.hr,

  // a['div.container']( [
    app.btn( app.icon( 'fas fa-redo', 'Update OS' ), (e,el) => el.nextSibling.$nodes = app.http(
      '/~/~/system/control/base_os/update',
      ( result, el ) => el.$nodes = x.list( result.content )
    ) ),
    a['app-test-btn-result'](),
  // ] ),
  // a['div.container']( [
    app.btn( app.icon( 'fas fa-redo', 'Update Engines' ), (e,el) => el.nextSibling.$nodes = app.http(
      '/~/~/system/control/engines_system/update',
      ( result, el ) => el.$nodes = x.list( result.content )
    ) ),
    a['app-test-btn-result'](),
  // ] ),
  // a.hr,

  // a.hr,
  // a.h3('Bad route'),
  // app.http( '/~/~/bad_route' ),
  // a.hr,
  // app.http(
  //   '/~/~/containers/engine/ldapadmin/logs',
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

  // a['div.container']( [
    app.btn( 'GETs', (e,el) => el.nextSibling.$nodes = [
      [ a.h5( '/~/~/system/certs/default' ), app.http( '/~/~/system/certs/default' ), a.br ],
      [ a.h5( '/~/~/system/certs/' ), app.http( '/~/~/system/certs/' ), a.br ],
      [ a.h5( '/~/~/system/certs/service_certs' ), app.http( '/~/~/system/certs/service_certs' ), a.br ],
      [ a.h5( '/~/~/system/config/default_domain' ), app.http( '/~/~/system/config/default_domain' ), a.br ],
      [ a.h5( '/~/~/system/config/default_site' ), app.http( '/~/~/system/config/default_site' ), a.br ],
      [ a.h5( '/~/~/system/config/hostname' ), app.http( '/~/~/system/config/hostname' ), a.br ],
      [ a.h5( '/~/~/system/config/remote_exception_logging' ), app.http( '/~/~/system/config/remote_exception_logging' ), a.br ],
      [ a.h5( '/~/~/system/status/first_run_required' ), app.http( '/~/~/system/status/first_run_required' ), a.br ],
      [ a.h5( '/~/~/system/status/update' ), app.http( '/~/~/system/status/update' ), a.br ],
      [ a.h5( '/~/~/system/domains/' ), app.http( '/~/~/system/domains/' ), a.br ],
      [ a.h5( '/~/~/system/metrics/disks' ), app.http( '/~/~/system/metrics/disks' ), a.br ],
      [ a.h5( '/~/~/system/metrics/load' ), app.http( '/~/~/system/metrics/load' ), a.br ],
      [ a.h5( '/~/~/system/metrics/memory' ), app.http( '/~/~/system/metrics/memory' ), a.br ],
      [ a.h5( '/~/~/system/metrics/memory/statistics' ), app.http( '/~/~/system/metrics/memory/statistics' ), a.br ],
      [ a.h5( '/~/~/system/metrics/network' ), app.http( '/~/~/system/metrics/network' ), a.br ],
      [ a.h5( '/~/~/system/version/api' ), app.http( '/~/~/system/version/api' ), a.br ],
      [ a.h5( '/~/~/system/version/base_os' ), app.http( '/~/~/system/version/base_os' ), a.br ],
      [ a.h5( '/~/~/system/version/ident' ), app.http( '/~/~/system/version/ident' ), a.br ],
      [ a.h5( '/~/~/system/version/release' ), app.http( '/~/~/system/version/release' ), a.br ],
      [ a.h5( '/~/~/system/version/system' ), app.http( '/~/~/system/version/system' ), a.br ],
      [ a.h5( '/~/~/system/reserved/engine_names' ), app.http( '/~/~/system/reserved/engine_names' ), a.br ],
      [ a.h5( '/~/~/system/reserved/hostnames' ), app.http( '/~/~/system/reserved/hostnames' ), a.br ],
      [ a.h5( '/~/~/system/reserved/ports' ), app.http( '/~/~/system/reserved/ports' ), a.br ],
      [ a.h5( '/~/~/system/system_user/settings' ), app.http( '/~/~/system/system_user/settings' ), a.br ],
      [ a.h5( '/~/~/system/bootstrap/mgmt_url' ), app.http( '/~/~/system/bootstrap/mgmt_url' ), a.br ],
      [ a.h5( '/~/~/system/control/base_os/locale' ), app.http( '/~/~/system/control/base_os/locale' ), a.br ],
      [ a.h5( '/~/~/system/control/base_os/locale' ), app.http( '/~/~/system/control/base_os/locale' ), a.br ],
      [ a.h5( '/~/~/system/control/engines_system/dump_threads' ), app.http( '/~/~/system/control/engines_system/dump_threads' ), a.br ],
      [ a.h5( '/~/~/system/control/engines_system/heap_stats' ), app.http( '/~/~/system/control/engines_system/heap_stats' ), a.br ],
      [ a.h5( '/~/~/system/certs/default' ), app.http( '/~/~/system/certs/default' ), a.br ],
      [ a.h5( '/~/~/system/config/default_domain' ), app.http( '/~/~/system/config/default_domain' ), a.br ],
      [ a.h5( '/~/~/system/control/engines_system/dump_threads' ), app.http( '/~/~/system/control/engines_system/dump_threads' ), a.br ],
      [ a.h5( '/~/~/system/control/engines_system/heap_stats' ), app.http( '/~/~/system/control/engines_system/heap_stats' ), a.br ],
      [ a.h5( '/~/~/system/control/base_os/locale' ), app.http( '/~/~/system/control/base_os/locale' ), a.br ],
      [ a.h5( '/~/~/system/config/default_site' ), app.http( '/~/~/system/config/default_site' ), a.br ],
      [ a.h5( '/~/~/system/config/hostname' ), app.http( '/~/~/system/config/hostname' ), a.br ],
      [ a.h5( '/~/~/system/bootstrap/mgmt_url' ), app.http( '/~/~/system/bootstrap/mgmt_url' ), a.br ],
      [ a.h5( '/~/~/system/config/remote_exception_logging' ), app.http( '/~/~/system/config/remote_exception_logging' ), a.br ],
      [ a.h5( '/~/~/system/metrics/disks' ), app.http( '/~/~/system/metrics/disks' ), a.br ],
      [ a.h5( '/~/~/system/metrics/load' ), app.http( '/~/~/system/metrics/load' ), a.br ],
      [ a.h5( '/~/~/system/metrics/memory' ), app.http( '/~/~/system/metrics/memory' ), a.br ],
      [ a.h5( '/~/~/system/metrics/memory/statistics' ), app.http( '/~/~/system/metrics/memory/statistics' ), a.br ],
      [ a.h5( '/~/~/system/metrics/network' ), app.http( '/~/~/system/metrics/network' ), a.br ],
      [ a.h5( '/~/~/system/reserved/engine_names' ), app.http( '/~/~/system/reserved/engine_names' ), a.br ],
      [ a.h5( '/~/~/system/reserved/hostnames' ), app.http( '/~/~/system/reserved/hostnames' ), a.br ],
      [ a.h5( '/~/~/system/reserved/ports' ), app.http( '/~/~/system/reserved/ports' ), a.br ],
      [ a.h5( '/~/~/system/status' ), app.http( '/~/~/system/status' ), a.br ],
      [ a.h5( '/~/~/system/status/first_run_required' ), app.http( '/~/~/system/status/first_run_required' ), a.br ],
      [ a.h5( '/~/~/system/system_user/settings' ), app.http( '/~/~/system/system_user/settings' ), a.br ],
      [ a.h5( '/~/~/system/status/update' ), app.http( '/~/~/system/status/update' ), a.br ],
      [ a.h5( '/~/~/system/version/api' ), app.http( '/~/~/system/version/api' ), a.br ],
      [ a.h5( '/~/~/system/version/base_os' ), app.http( '/~/~/system/version/base_os' ), a.br ],
      [ a.h5( '/~/~/system/version/ident' ), app.http( '/~/~/system/version/ident' ), a.br ],
      [ a.h5( '/~/~/system/version/release' ), app.http( '/~/~/system/version/release' ), a.br ],
      [ a.h5( '/~/~/system/version/system' ), app.http( '/~/~/system/version/system' ), a.br ],
      [ a.h5( '/~/~/system/certs/' ), app.http( '/~/~/system/certs/' ), a.br ],
      [ a.h5( '/~/~/system/domains/' ), app.http( '/~/~/system/domains/' ), a.br ],
      [ a.h5( '/~/~/system/certs/service_certs' ), app.http( '/~/~/system/certs/service_certs' ), a.br ],
      [ a.h5( '/~/~/system/control/base_os/locale' ), app.http( '/~/~/system/control/base_os/locale' ), a.br ],
      // app.http('/~/~/containers/engines/clear_lost'),
      [ a.h5( '/~/~/containers/engines/' ), app.http( '/~/~/containers/engines/' ), a.br ],
      [ a.h5( '/~/~/containers/engines/container_name' ), app.http( '/~/~/containers/engines/container_name' ), a.br ],
      [ a.h5( '/~/~/containers/engines/state' ), app.http( '/~/~/containers/engines/state' ), a.br ],
      [ a.h5( '/~/~/containers/engines/status' ), app.http( '/~/~/containers/engines/status' ), a.br ],

      [ a.h5( '/~/~/containers/services/' ), app.http( '/~/~/containers/services/' ), a.br ],
      [ a.h5( '/~/~/containers/services/state' ), app.http( '/~/~/containers/services/state' ), a.br ],
      [ a.h5( '/~/~/containers/services/status' ), app.http( '/~/~/containers/services/status' ), a.br ],
      [ a.h5( '/~/~/containers/services/system' ), app.http( '/~/~/containers/services/system' ), a.br ],

    ] ),
    a['app-test-btn-result'](),
  // ] ),
  // a.hr,

  //
  // a.h3('Engines/Applications'),
  //
  //
  // a.h3('Services'),
  //


  // app.btn( 'export', (e,el) => el.nextSibling.$nodes = app.http('/~/~/containers/service/volmgr/export') ),
  // a['app-test-btn-result'](),


  // a.hr,
  // app.http(
  //   '/~/~/containers/service/volmgr/logs',
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

  // a['div.container']( [

    a.h3('Builder' ),

    app.http(
      '/~/~/engine_builder/status',
      ( result, el ) => el.$nodes = x.list( result.content )
    ),


    app.xterm( { label: 'Builder log' } ),
    a['appkit-event-source']( {
      $init: function() {
  			this.$eventsource = new EventSource( '/~/eventsource/builder' )
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
  // ] ),
  // a.hr,

  // a['div.container']( [
    app.btn( app.icon( "fas fa-power-off", "Shutdown" ), () => controller.open( '/system/shutdown' ) ),
    app.btn( app.icon( "fas fa-recycle", "Restart" ), () => controller.open( '/system/restart' ) ),
  // ] ),



] )
