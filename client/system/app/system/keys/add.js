app.system.keys.add = controller => (a,x) => [

  a.h5( 'Add' ),

  app.form( {
    url: '/~/~/system/keys/',
    success: () => controller.open( '..' ),
    scope: 'api_vars',
    form: (f) => [

      f.field( {
        key: 'key_name',
        label: false,
        layout: 'vertical',
        required: 'required',
      } ),

      f.field( {
        key: 'self_hosted',
        as: 'checkbox',
      } ),

      f.field( {
        key: 'internal_only',
        as: 'checkbox',
      } ),

      f.buttons(),

    ]
  } )

]
