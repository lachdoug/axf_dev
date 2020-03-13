app.system.domains.default = controller => (a,x) => [

  a.h5( 'Default' ),

  app.http( [
    '/~/~/system/config/default_domain',
    '/~/~/system/domains/',
  ], ( [ defaultDomain, domains ], el ) => {
    el.$nodes = app.form( {
      url: '/~/~/system/config/default_domain',
      success: () => controller.open( '..' ),
      object: { default_domain: defaultDomain },
      scope: 'api_vars',
      form: (f) => [

        f.field( {
          key: 'default_domain',
          label: false,
          layout: 'vertical',
          as: 'select',
          selections: Object.keys( domains ),
          required: 'required',
        } ),

        f.buttons(),


      ]
    } )
  } )


]
