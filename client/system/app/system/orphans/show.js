app.system.orphans.show = controller => (a,x) => [

  a['div.clearfix'](
    a['div.float-right']( [
      app.up( controller, 'Close' ),
    ] )
  ),


 //  - (true) delete('/v0/service_manager/orphan_service/:publisher_namespace/:type_path:/:parent_engine/:service_handle')
 //
 // remove underlying data and delete orphan.
 // - (octet-stream) get('/v0/service_manager/orphan_service/export/:publisher_namespace/:type_path:/:parent_engine/:service_handle')
 // - (Array) get('/v0/service_manager/orphan_services/')
 //
 // Orphan Service Hashes.
 // - (Hash) get('/v0/service_manager/orphan_service/:publisher_namespace/:type_path:/:parent_engine/:service_handle')
 //
 // Orphan Service Hash.
 // - (Array) get('/v0/service_manager/orphan_services/:publisher_namespace/:type_path:')
 //
 // Orphan Service Hashes.
 // - (Array) get('/v0/service_manager/orphan_lost_services')


  [ a.h5( '/~/~/service_manager/orphan_services/' ), app.http( '/~/~/service_manager/orphan_services/' ), a.br ],
  [ a.h5( '/~/~/service_manager/orphan_lost_services' ), app.http( '/~/~/service_manager/orphan_lost_services' ), a.br ],

  // app.http(
  //   '/~/~/system/certs/',
  //   ( response, el ) => response.json().then(
  //     orphans => el.$nodes = [
  //       orphans,
  //       // a.h5( 'Registered'),
  //       // Object.values( orphans ).length == 0 ? a.i( 'None' ) : null,
  //       // a.ul( Object.values( orphans ).map(
  //       //   certificate => a.li( [
  //       //     certificate.certificate_name || a['.error']( 'Missing name.' ),
  //       //     a.small( [
  //       //       certificate.self_hosted ? 'self-hosted' : null,
  //       //       certificate.internal_only ? 'internal' : null,
  //       //     ] ),
  //       //     // certificate,
  //       //   ] )
  //       // ) ),
  //       app.btn(
  //         app.icon( 'fa fa-plus' ),
  //         (e,el) => controller.open( 'add' )
  //       ),
  //       app.btn(
  //         app.icon( 'fa fa-minus' ),
  //         (e,el) => controller.open( 'remove' )
  //       ),
  //     ]
  //   )
  // ),

]
