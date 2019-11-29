app.namespaces.namespace = controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }`,
    ( response, el ) => {
      let namespace = response.content

      el.$nodes = [
        a.h3( namespace.name ),

        controller.routes( {
          '/?': app.namespaces.namespace.show( namespace ),
          '/delete': app.namespaces.namespace.delete,
          '/repo/?*': app.repo( 'namespace', `namespaces/${ controller.params.namespace_id }` ),
          '/readme/?': app.readme( 'namespace', `namespaces/${ controller.params.namespace_id }`),
          '/license/?': app.license( 'namespace', `namespaces/${ controller.params.namespace_id }`),
          '/definitions/?*': app.namespaces.namespace.definitions,
          '/*': app.services,
          // '*': app.notFound
        }, {
          lazy: true,
          // transition: [ 'crossfade', { time: 1000 } ],
        } ),

      ]

    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', 'Loading namespace' )
      )
    }
  )



]
