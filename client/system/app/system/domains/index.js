app.system.domains.index = controller => (a,x) => [

  a['div.clearfix'](
    a['div.float-right']( [
      app.up( controller, 'Close' ),
    ] )
  ),

  app.http( [
    '/~/~/system/config/default_domain',
    '/~/~/system/domains/',
  ], ( [ defaultDomain, domains ], el ) => {
    el.$nodes = [

      a['div.clearfix']( [
        a['div.float-right']( [
          app.btn( app.icon( 'fa fa-star', 'Default' ),
          () => controller.open( 'default' ) ),
        ] ),

        app.btn(
          app.icon( 'fa fa-plus' ),
          (e,el) => controller.open( 'add' )
        ),
        app.btn(
          app.icon( 'fa fa-minus' ),
          (e,el) => controller.open( 'remove' )
        ),
      ] ),

      Object.values( domains ).length == 0 ? a.i( 'None' ) : null,
      a.ul( Object.values( domains ).map(
        domain => a.li( [
          domain.domain_name || a['.error']( 'Missing name.' ),
          a.small( [
            domain.self_hosted ? 'self-hosted' : null,
            domain.internal_only ? 'internal' : null,
          ] ),
          domain.domain_name === defaultDomain ?
            app.icon( 'fas fa-star' ) : null
        ] )
      ) ),

    ]
  } ),

  // app.http(
  //   '/~/~/system/domains/',
  //   ( domains, el ) => el.$nodes = [
  //
  //     app.http(
  //       '/~/~/system/config/default_domain',
  //       ( defaultDomain, el ) => el.$nodes =
  //     ),
  //
  //   ]
  // ),

]
