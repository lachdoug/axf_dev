app.system.locale = controller => (a,x) => [
  a.h3( "Locale" ),

  app.http(
    '/~/~/system/control/base_os/locale',
    ( locale, el ) => el.$nodes = app.form( {
      url: '/~/~/system/control/base_os/locale',
      success: () => controller.open( '..' ),
      scope: 'api_vars',
      object: locale,
      form: (f) => [
        f.field( {
          key: 'lang_code',
          label: 'Language',
          as: 'language',
        } ),
        f.field( {
          key: 'country_code',
          label: 'Country',
          as: 'country',
        } ),
        f.buttons(),
      ]
    } )
  ),

]
