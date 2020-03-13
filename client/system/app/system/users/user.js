app.system.users.user = controller => (a,x) => {

  let uid = controller.params.user_uid

  return [

    a.h5( uid ),

    controller.routes( {
      '/?': app.system.users.user.show,
      '/edit': app.system.users.user.edit,
      '/password': app.system.users.user.password,
      '/enable': app.system.users.user.enable,
      '/email': app.system.users.user.email,
      '/groups*': app.system.users.user.groups,
    }, {
      lazy: true,
      transition: 'crossfade',
    } ),

  ]

}
