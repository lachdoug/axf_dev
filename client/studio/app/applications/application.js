app.applications.application = (controller) => (a,x) => [

  app.http(
    `/~/applications/${ controller.params.application_id }/name`,
    ( response, el ) => {
      let application = response.content
      el.$nodes = [
        a.h3( application.name ),
      ]
    },
    // {
    //   placeholder: a.p(
    //     app.icon( 'fa fa-spinner fa-spin', 'Loading application name' )
    //   )
    // }
  ),

  controller.routes( {
    '/?': app.applications.application.show,
    '/repo/?*': app.repo( 'application', `applications/${ controller.params.application_id }` ),
    '/delete': app.applications.application.delete,
    '/readme': app.readme( 'application', `applications/${ controller.params.application_id }`),
    '/license': app.license( 'application', `applications/${ controller.params.application_id }`),
    '/views/?*': app.views( 'application', `applications/${ controller.params.application_id }`),
    '/blueprint': app.applications.application.blueprint,
  }, {
    lazy: true,
    // transition: [ 'crossfade', { time: 1000 } ],
  } ),

]
