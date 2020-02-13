app.system.diagnostics = ( controller ) => (a,x) => a['app-system-overview']( [

  a.h3( 'System diagnostics' ),

  a['div.clearfix'](
    a['div.float-right']( [
      app.btn( app.icon( 'fa fa-arrow-up' ), (e,el) => controller.open( '..' ) ),
    ] )
  ),

  app.btn(
    app.icon( 'fas fa-chart-bar', 'Metrics' ),
    (e,el) => controller.open( '../metrics' )
  ),

  app.btn(
    app.icon( 'fas fa-book', 'Registry' ),
    (e,el) => controller.open( '../registry' )
  ),





  [ a.h5( '/~/~/system/status/first_run_required' ), app.http( '/~/~/system/status/first_run_required' ), a.br ],
  [ a.h5( '/~/~/system/reserved/engine_names' ), app.http( '/~/~/system/reserved/engine_names' ), a.br ],
  [ a.h5( '/~/~/system/reserved/hostnames' ), app.http( '/~/~/system/reserved/hostnames' ), a.br ],
  [ a.h5( '/~/~/system/reserved/ports' ), app.http( '/~/~/system/reserved/ports' ), a.br ],
  [ a.h5( '/~/~/system/control/engines_system/dump_threads' ), app.http( '/~/~/system/control/engines_system/dump_threads' ), a.br ],
  [ a.h5( '/~/~/system/control/engines_system/heap_stats' ), app.http( '/~/~/system/control/engines_system/heap_stats' ), a.br ],
  app.btn( app.icon( 'fas fa-clipboard-check', 'Checkup' ), (e,el) => el.nextSibling.$nodes = app.http(
    '/~/~/containers/check_and_act',
    ( response, el ) => response.json().then( result => { el.$nodes = x.list( result ) } )
  ) ),
  a['app-test-btn-result'](),
] )
