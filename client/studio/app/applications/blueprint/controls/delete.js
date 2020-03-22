app.applications.blueprint.controls.delete = blueprint => controller => (a,x) => {

  let control = blueprint.controls.find( controller.params.control_id )

  return [

    a.h5( `Delete control ${ control.id + 1 }` ),
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
        title: 'Delete control',
        // confirm: 'Are you sure that you want to delete this application?',
        onclick: (e,el) => {

          control.delete()

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
