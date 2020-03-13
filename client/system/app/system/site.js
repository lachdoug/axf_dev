app.system.site = controller => (a,x) => [
  a.h3( "Site" ),

  app.http(
    '/~/~/system/config/default_site',
    ( site, el ) => el.$nodes = app.form( {
      url: '/~/~/system/config/default_site',
      success: () => controller.open( '..' ),
      scope: 'api_vars',
      form: (f) => [
        f.field( {
          key: 'default_site',
          value: site,
          label: false,
          layout: 'vertical'
        } ),
        f.buttons(),
      ]
    } )
  ),

]
