app.applications.reset = controller => (a,x) => [

  a.p( 'Reset branch?' ),
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
      title: 'Reset branch',
      onclick: (e,el) => {

        el.$('^').$nodes = app.http(
          `/~/applications/${ controller.params.application_id }/reset`,
          ( result, el ) => el.$nodes = [
            a.pre( result.message ),
            a['div.clearfix']( [
              app.button( {
                label: app.icon( 'fa fa-check', 'OK' ),
                onclick: (e,el) => {
                  controller.open( '..' )
                },
                title: 'Return to application',
              } ),
            ] ),
          ],
          {
            method: 'POST',
            placeholder: a.p(
              app.hourglass( 'Resetting branch' )
            )
          }
        )

      },
    } ),

  ] )

]
