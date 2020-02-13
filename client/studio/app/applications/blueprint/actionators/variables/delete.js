app.applications.blueprint.actionators.variables.delete = blueprint => controller => (a,x) => {

  let actionator = blueprint.actionators.find( controller.params.actionator_id )
  let variable = actionator.variables.find( controller.params.variable_id )

  return [

    a.h5( `Delete actionator ${ actionator.id + 1 } variable ${ variable.id + 1 }` ),
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
        title: 'Delete actionator',
        // confirm: 'Are you sure that you want to delete this application?',
        onclick: (e,el) => {

          variable.delete()

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
