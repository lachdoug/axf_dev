app.applications.application = controller => (a,x) => [

  app.http(
    `/~/applications/${ controller.params.application_id }`,
    ( application, el ) => el.$nodes = [
      a.h3( application.name ),
      a.small( application.remote ),
      a.h5( application.branch, {
        id: 'applicationBranch',
      } ),

      controller.routes( {
        '/?': app.applications.show,
        '/delete': app.applications.delete,
        '/readme': app.readme( 'application', `applications/${ controller.params.application_id }`),
        '/license': app.license( 'application', `applications/${ controller.params.application_id }`),
        '/views*': app.views( 'application', `applications/${ controller.params.application_id }`),
        '/blueprint*': app.applications.blueprint,
        '/branch*': app.applications.branch,
        '/status': app.applications.status,
        '/commit': app.applications.commit,
        '/push': app.applications.push,
        '/pull': app.applications.pull,
        '/reset': app.applications.reset,
      }, {
        lazy: true,
      } ),

    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading application' )
      )
    }
  ),

]
