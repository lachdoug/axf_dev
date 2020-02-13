app.namespaces.workspace.services.show = controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/services/${ controller.params.service_id }`,
    ( response, el ) => {
      response.json().then( service => {

        el.$nodes = [

          a.h5( service.name ),

          a['div.clearfix']( a['div.btn-group.float-right']( [
            app.up( controller, 'Return to workspace' ),
          ] ) ),

          service,

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
