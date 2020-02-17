app.namespaces.workspace.services.service = controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }`,
    ( response, el ) => {
      response.json().then( service => {

        el.$nodes = [

          a.h3( service.name ),
          a.small( service.remote ),
          a.h5( service.branch ),

          controller.routes( {
            '/?': app.namespaces.workspace.services.show,
            // '/:service_id*': app.namespaces.services.service( namespace ),
            '/delete': app.namespaces.workspace.services.delete,
            // '/repo/?*': app.repo( 'namespace', `namespaces/${ controller.params.namespace_id }` ),
            '/readme/?': app.readme( 'service', `namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }`),
            '/license/?': app.license( 'service', `namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }`),
            // '/definitions/?*': app.namespaces.definitions,
            // '/*': app.services,
            // '*': app.notFound
          }, {
            lazy: true,
          } ),


        ]

      } )

    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', 'Loading service' )
      )
    }
  ),


]
