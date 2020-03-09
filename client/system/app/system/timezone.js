app.system.timezone = controller => (a,x) => [
  a.h3( "Timezone" ),

  app.http(
    '/~/~/system/control/base_os/timezone',
    (  timezone, el ) => el.$nodes = app.form( {
      url: '/~/~/system/control/base_os/timezone',
      success: () => controller.open( '..' ),
      scope: 'api_vars',
      object: { timezone: timezone },
      form: (f) => [
        f.field( {
          key: 'timezone',
          label: false,
          as: 'timezone',
          layout: 'vertical',
        } ),
        f.btns( controller ),
      ]
    } )
  ),

]
