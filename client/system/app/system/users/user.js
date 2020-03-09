app.system.users.user = controller => (a,x) => {

  let uid = controller.params.user_uid

  return [
    a.h5( uid ),

    controller.routes( {
      '/?': app.system.users.user.show,
      '/name': app.system.users.user.name,
      '/password': app.system.users.user.password,
      '/enable': app.system.users.user.enable,
      '/email': app.system.users.user.email,
      '/groups*': app.system.users.user.groups,
    }, {
      lazy: true,
    } ),

    a.hr,
    a.button( "hi", { class: 'btn btn-outline-primary' } ),
    a.button( "hi", { class: 'btn btn-secondary' } ),
    a.button( "hi", { class: 'btn btn-outline-secondary' } ),

  ]

}
