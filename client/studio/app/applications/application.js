app.applications.application = (controller) => (a,x) => [

  app.http(
    `/~/applications/${ controller.params.application_id }`,
    ( response, el ) => {
      response.json().then( application => el.$nodes = [
        a.h3( application.name ),
        a.small( application.remote ),
        a.h5( application.branch ),

        controller.routes( {
          '/?': app.applications.show,
          // '/repo/?*': app.repo( 'application', `applications/${ controller.params.application_id }` ),
          '/delete': app.applications.delete,
          '/readme': app.readme( 'application', `applications/${ controller.params.application_id }`),
          '/license': app.license( 'application', `applications/${ controller.params.application_id }`),
          '/views/?*': app.views( 'application', `applications/${ controller.params.application_id }`),
          '/blueprint/?*': app.applications.blueprint,
          '/diffs': app.applications.diffs,
          '/commit': app.applications.commit,
          '/push': app.applications.push,
          '/reset': app.applications.reset,
          // '/metadata': app.applications.blueprint.metadata,
        }, {
          lazy: true,
          // transition: [ 'crossfade', { time: 1000 } ],
        } ),

      ] )
    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', 'Loading application' )
      )
    }
  ),

]
