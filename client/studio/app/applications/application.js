app.applications.application = (controller) => (a,x) => [

  app.entryHeadings(
    `applications/${ controller.params.application_id }`
  ),

  controller.routes( {
    '/?': app.applications.show,
    '/repo/?*': app.repo( 'application', `applications/${ controller.params.application_id }` ),
    '/delete': app.applications.delete,
    '/readme': app.readme( 'application', `applications/${ controller.params.application_id }`),
    '/license': app.license( 'application', `applications/${ controller.params.application_id }`),
    '/views/?*': app.views( 'application', `applications/${ controller.params.application_id }`),
    '/blueprint/?*': app.applications.blueprint,
    // '/metadata': app.applications.blueprint.metadata,
  }, {
    lazy: true,
    // transition: [ 'crossfade', { time: 1000 } ],
  } ),

]
