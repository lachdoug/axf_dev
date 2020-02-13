app.system.settings.site = ( controller ) => (a,x) => [

  // a['div.clearfix'](
  //   a['div.float-right']( [
  //     app.btn( app.icon( 'fa fa-arrow-up' ), (e,el) => controller.open( '..' ) ),
  //   ] )
  // ),
  //
  // app.http(
  //   '/~/~/system/config/default_domain',
  //   ( response, el ) => response.text().then(
  //     domain => el.$nodes = [
  //       a['div.clearfix']( [
  //         a['div.float-right']( [
  //           app.btn( app.icon( 'fa fa-edit' ), (e,el) => controller.open( 'default' ) ),
  //         ] ),
  //         a.h5( 'Default' ),
  //       ] ),
  //       domain
  //     ]
  //   )
  // ),
  //
  // a.hr,
  //
  // app.http(
  //   '/~/~/system/site/',
  //   ( response, el ) => response.json().then(
  //     site => el.$nodes = [
  //       a.h5( 'Registered'),
  //       Object.values( site ).length == 0 ? a.i( 'None' ) : null,
  //       a.ul( Object.values( site ).map(
  //         domain => a.li( [
  //           domain.domain_name || a['.error']( 'Missing name.' ),
  //           a.small( [
  //             domain.self_hosted ? 'self-hosted' : null,
  //             domain.internal_only ? 'internal' : null,
  //           ] ),
  //           // domain,
  //         ] )
  //       ) ),
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
