app.namespaces.namespace = controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }`,
    ( response, el ) => {
      response.json().then( application => el.$nodes = [
        a.h3( application.name ),
        a.small( application.remote ),
        a.h5( application.branch ),

        controller.routes( {
          '/?': app.namespaces.show,
          '/workspace*': app.namespaces.workspace,
          // '/services*': app.namespaces.services,
          // '/delete': app.namespaces.delete,
          // '/repo/?*': app.repo( 'namespace', `namespaces/${ controller.params.namespace_id }` ),
          // '/readme/?': app.readme( 'namespace', `namespaces/${ controller.params.namespace_id }`),
          '/license': app.namespaces.license,
          '/pull': app.namespaces.pull,
          '/definitions*': app.namespaces.definitions,
          // '/*': app.services,
          // '*': app.notFound
        }, {
          lazy: true,
          // transition: [ 'crossfade', { time: 1000 } ],
        } ),


      ] )
    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', 'Loading namespace' )
      )
    }
  ),

]
