app.applications.delete = (controller) => (a,x) => [

  a.p( 'Delete application?' ),
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
      title: 'Delete application',
      // confirm: 'Are you sure that you want to delete this application?',
      onclick: (e,el) => {

        el.$('^').$nodes = app.http(
          `/~/applications/${ controller.params.application_id }`,
          ( response, el ) => {
            response.json().then( result => {
              el.$nodes = [
                a.p( 'Application has been deleted.' ),
                a['div.clearfix']( [
                  app.button( {
                    label: app.icon( 'fa fa-check', 'OK' ),
                    onclick: (e,el) => {
                      controller.open( '/applications' )
                    },
                    title: 'Return to applications',
                  } ),
                ] ),
              ]
            } )
          },
          {
            method: 'DELETE',
            placeholder: a.p(
              app.icon( 'fa fa-spinner fa-spin', 'Deleting application' )
            )
          }
        )

      },
    } ),

  ] )

]
