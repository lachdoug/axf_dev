app.system.domains.show = ( controller ) => (a,x) => [

  a['div.clearfix'](
    a['div.float-right']( [
      app.btn( app.icon( 'fa fa-arrow-up' ), (e,el) => controller.open( '../settings' ) ),
    ] )
  ),

  app.http(
    '/~/~/system/config/default_domain',
    ( response, el ) => response.text().then(
      domain => el.$nodes = [
        a['div.clearfix']( [
          a['div.float-right']( [
            app.btn( app.icon( 'fa fa-edit' ), (e,el) => controller.open( 'default' ) ),
          ] ),
          a.h5( 'Default' ),
        ] ),
        domain
      ]
    )
  ),

  a.hr,

  app.http(
    '/~/~/system/domains/',
    ( response, el ) => response.json().then(
      domains => el.$nodes = [
        a.h5( 'Registered'),
        Object.values( domains ).length == 0 ? a.i( 'None' ) : null,
        a.ul( Object.values( domains ).map(
          domain => a.li( [
            domain.domain_name || a['.error']( 'Missing name.' ),
            a.small( [
              domain.self_hosted ? 'self-hosted' : null,
              domain.internal_only ? 'internal' : null,
            ] ),
            // domain,
          ] )
        ) ),
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
