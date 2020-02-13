app.applications.blueprint.environment_variables.delete = blueprint => controller => (a,x) => {

  let environmentVariable = blueprint.environmentVariables.find( controller.params.environment_variable_id )

  return [

    a.h5( `Delete environment variable ${ environmentVariable.id + 1 }` ),
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
        title: 'Delete environment variable',
        // confirm: 'Are you sure that you want to delete this application?',
        onclick: (e,el) => {

          environmentVariable.delete()

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
