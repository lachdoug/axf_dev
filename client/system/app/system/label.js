app.system.label = controller => (a,x) => [
  a.h3( "System label" ),

  app.http(
    '/~/~/system/system_user/settings',
    (  settings, el ) => el.$nodes = app.form( {
      url: '/~/~/system/system_user/settings',
      success: () => location.assign( '/' ),
      object: settings.label,
      scope: 'api_vars[label]',
      form: (f) => [
        f.field( {
          key: 'text',
          label: false,
          layout: 'vertical',
        } ),
        f.field( {
          key: 'color',
          as: 'input/color',
          label: 'Text',
        } ),
        f.field( {
          key: 'background_color',
          as: 'input/color',
          label: 'Background',
        } ),
        f.buttons(),
      ]
    } )
  ),

]
