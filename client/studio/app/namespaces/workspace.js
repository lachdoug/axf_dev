app.namespaces.workspace = controller => (a,x) => [

  a.hr,
  a.h5('Workspace'),

  controller.routes( {
    '/?': app.namespaces.workspace.show,
    '/new': app.namespaces.workspace.new,
    '/services*': app.namespaces.workspace.services,
    // '/:service_id*': app.namespaces.services.service( namespace ),
    // '/delete': app.namespaces.delete,
    // '/repo/?*': app.repo( 'namespace', `namespaces/${ controller.params.namespace_id }` ),
    // '/readme/?': app.readme( 'namespace', `namespaces/${ controller.params.namespace_id }`),
    // '/license/?': app.license( 'namespace', `namespaces/${ controller.params.namespace_id }`),
    // '/definitions/?*': app.namespaces.definitions,
    // '/*': app.services,
    // '*': app.notFound
  }, {
    lazy: true,
  } ),

]
