app.namespaces.workspace = controller => (a,x) => [

  a.hr,
  
  controller.routes( {
    '/?': app.namespaces.workspace.show,
    '/new': app.namespaces.workspace.new,
    '/services*': app.namespaces.workspace.services,
    // '/:service_id*': app.namespaces.services.service( namespace ),
    // '/delete': app.namespaces.delete,
    // '/repo/?*': app.repo( 'namespace', `namespaces/${ controller.params.namespace_id }` ),
    '/readme': app.readme( 'workspace', `namespaces/${ controller.params.namespace_id }/workspace`),
    '/license': app.license( 'workspace', `namespaces/${ controller.params.namespace_id }/workspace`),
    // '/license/?': app.license( 'namespace', `namespaces/${ controller.params.namespace_id }`),
    // '/definitions/?*': app.namespaces.definitions,
    // '/*': app.services,
    // '*': app.notFound
  }, {
    lazy: true,
  } ),

]
