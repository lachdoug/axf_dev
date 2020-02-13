app.namespaces.namespace = controller => (a,x) => [

  app.entryHeadings(
    `namespaces/${ controller.params.namespace_id }`
  ),

  controller.routes( {
    '/?': app.namespaces.show,
    '/workspace*': app.namespaces.workspace,
    // '/services*': app.namespaces.services,
    // '/delete': app.namespaces.delete,
    // '/repo/?*': app.repo( 'namespace', `namespaces/${ controller.params.namespace_id }` ),
    // '/readme/?': app.readme( 'namespace', `namespaces/${ controller.params.namespace_id }`),
    '/license': app.license( 'namespace', `namespaces/${ controller.params.namespace_id }`),
    '/definitions*': app.namespaces.definitions,
    // '/*': app.services,
    // '*': app.notFound
  }, {
    lazy: true,
    // transition: [ 'crossfade', { time: 1000 } ],
  } ),
  // app.http(
  //   `/~/namespaces/${ controller.params.namespace_id }`,
  //   ( response, el ) => {
  //     response.json().then( namespace => {
  //       el.$nodes = [
  //         a.h3( namespace.name ),
  //
  //
  //       ]
  //     } )
  //
  //   },
  //   {
  //     placeholder: a.p(
  //       app.icon( 'fa fa-spinner fa-spin', 'Loading namespace' )
  //     )
  //   }
  // )



]
