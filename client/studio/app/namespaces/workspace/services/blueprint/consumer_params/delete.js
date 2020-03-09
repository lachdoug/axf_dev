app.namespaces.workspace.services.blueprint.consumer_params.delete = blueprint => controller => (a,x) => {

  let consumerParam = blueprint.consumerParams.find( controller.params.consumer_param_id )

  return [

    a.h5( `Delete consumer param ${ consumerParam.id + 1 }` ),
    a.p( [

      app.button( {
        label: app.icon( 'fa fa-times', 'Cancel' ),
        class: 'btn btn-secondary',
        title: 'Cancel',
        onclick: (e,el) => {
          controller.open('..')
        },
      } ),
      ' ',
      app.button( {
        label: app.icon( 'fa fa-trash', 'Delete' ),
        class: 'btn btn-danger',
        title: 'Delete consumer param',
        // confirm: 'Are you sure that you want to delete this application?',
        onclick: (e,el) => {

          consumerParam.delete()

          el.$nodes = app.http(
            blueprint.apiEndpoint,
            () => controller.open( '../..' ),
            {
              method: 'POST',
              placeholder: app.hourglass( `Saving blueprint...` ),
              headers: { 'Content-type': 'application/json' },
              body:  JSON.stringify( blueprint.output, null, 2 )
            }
          )

        },
      } ),

    ] )

  ]

}
