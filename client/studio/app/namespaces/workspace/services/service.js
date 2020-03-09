app.namespaces.workspace.services.service = namespace => controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }`,
    ( service, el ) => el.$nodes = [

      a.hr,

      a.h3( service.name ),
      a.small( service.remote ),
      a.h5( service.branch, {
        id: 'serviceBranch',
      } ),

      controller.routes( {
        '/?': app.namespaces.workspace.services.show,
        '/delete': app.namespaces.workspace.services.delete,
        '/readme': app.readme( 'service', `namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }`),
        '/license': app.license( 'service', `namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }`),
        '/blueprint*': app.namespaces.workspace.services.blueprint( namespace ),
        '/definition': app.namespaces.workspace.services.definition,
        '/branch*': app.namespaces.workspace.services.branch,
        '/status': app.namespaces.workspace.services.status,
        '/commit': app.namespaces.workspace.services.commit,
        '/push': app.namespaces.workspace.services.push,
        '/reset': app.namespaces.workspace.services.reset,
      }, {
        lazy: true,
      } ),


    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading service' )
      )
    }
  ),


]
