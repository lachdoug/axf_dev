app.applications.reset = (controller) => (a,x) => [

  a.p( 'Reset application? Local changes will be lost.' ),
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
      label: app.icon( 'fa fa-undo', 'Reset' ),
      class: 'btn btn-danger',
      title: 'Reset application',
      onclick: (e,el) => {

        el.$('^').$nodes = app.http(
          `/~/applications/${ controller.params.application_id }/reset`,
          ( response, el ) => {
            controller.open( '..' )
          },
          {
            method: 'POST',
            placeholder: a.p(
              app.icon( 'fa fa-spinner fa-spin', 'Reseting application' )
            )
          }
        )

      },
    } ),

  ] )

]
