app.system.admin = controller => (a,x) => [
  a.h3( "Admin" ),

  app.http( '/~/~/system/user/admin' ),
  app.http( '/~/~/system/user/engines' ),

  app.form( {
    url: '/~/~/unauthenticated/user/set_password',
    success: () => location.assign( '/' ),
    scope: 'api_vars',
    form: (f) => [
      f.field( {
        key: 'user_name',
        as: 'input/hidden',
        value: 'engines',
      } ),
      f.field( {
        key: 'current_password',
        required: true,
        as: 'password',
      } ),
      f.field( {
        key: 'new_password',
        required: true,
        as: 'password',
        confirmation: true,
      } ),
      f.buttons(),
    ]
  } )

]
