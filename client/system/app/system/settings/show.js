app.system.settings.show = ( controller ) => (a,x) => [

  app.btn(
    app.icon( 'fas fa-globe', 'Domains' ),
    (e,el) => controller.open( '../domains' )
  ),



  app.btn(
    app.icon( 'fas fa-certificate', 'Certificates' ),
    (e,el) => controller.open( '../certificates' )
  ),


  a.h5( 'Default domain' ),
  app.http(
    '/~/~/system/config/default_domain',
    ( response, el ) => response.text().then(
      domain => el.$nodes = [
        a['div.clearfix']( [
          a['div.float-right']( [
            app.btn( app.icon( 'fa fa-edit' ), (e,el) => controller.open( 'default' ) ),
          ] ),
          domain
        ] ),
      ]
    )
  ),

  a.h5( 'Domains' ),
  app.http(
    '/~/~/system/domains/',
    ( response, el ) => response.json().then(
      domains => el.$nodes = [
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

  a.h5( 'Default site' ),
  app.http( '/~/~/system/config/default_site' ),

  a.h5( 'Hostname' ),
  app.http( '/~/~/system/config/hostname' ),

  a.h5( 'Remote exception logging' ),
  app.http( '/~/~/system/config/remote_exception_logging' ),

  a.h5( 'Locale' ),
  app.http(
    '/~/~/system/control/base_os/locale',
    ( response, el ) => response.json().then( locale =>

      el.$nodes = app.report( {
        object: locale,
        report: (r) => [
          locale,
          r.output( { key: 'lang_code', as: 'language' } ),
          r.output( { key: 'country_code' } ),
        ],
      } )

    ),
  ),

  a.h5( 'Timezone' ),
  app.http( '/~/~/system/control/base_os/timezone' ),

]
