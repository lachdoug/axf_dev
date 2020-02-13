app.system.certificates.show = ( controller ) => (a,x) => [

  a['div.clearfix'](
    a['div.float-right']( [
      app.btn( app.icon( 'fa fa-arrow-up' ), (e,el) => controller.open( '../settings' ) ),
    ] )
  ),

  // app.http(
  //   '/~/~/system/config/default_certificate',
  //   ( response, el ) => response.text().then(
  //     certificate => el.$nodes = [
  //       a['div.clearfix']( [
  //         a['div.float-right']( [
  //           app.btn( app.icon( 'fa fa-edit' ), (e,el) => controller.open( 'default' ) ),
  //         ] ),
  //         a.h5( 'Default' ),
  //       ] ),
  //       certificate
  //     ]
  //   )
  // ),
  //
  // a.hr,

  [ a.h5( '/~/~/system/certs/default' ), app.http( '/~/~/system/certs/default' ), a.br ],
  [ a.h5( '/~/~/system/certs/service_certs' ), app.http( '/~/~/system/certs/service_certs' ), a.br ],

  app.http(
    '/~/~/system/certs/',
    ( response, el ) => response.json().then(
      certificates => el.$nodes = [
        certificates,
        // a.h5( 'Registered'),
        // Object.values( certificates ).length == 0 ? a.i( 'None' ) : null,
        // a.ul( Object.values( certificates ).map(
        //   certificate => a.li( [
        //     certificate.certificate_name || a['.error']( 'Missing name.' ),
        //     a.small( [
        //       certificate.self_hosted ? 'self-hosted' : null,
        //       certificate.internal_only ? 'internal' : null,
        //     ] ),
        //     // certificate,
        //   ] )
        // ) ),
        app.btn(
          app.icon( 'fa fa-plus' ),
          (e,el) => controller.open( 'add' )
        ),
        app.btn(
          app.icon( 'fa fa-minus' ),
          (e,el) => controller.open( 'remove' )
        ),
      ]
    )
  ),

]
