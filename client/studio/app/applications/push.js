app.applications.push = (controller) => (a,x) => [

  a.p( 'Push commits?' ),
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
      label: app.icon( 'fas fa-file-upload', 'Push' ),
      class: 'btn btn-primary',
      title: 'Push commits',
      // confirm: 'Are you sure that you want to delete this application?',
      onclick: (e,el) => {

        el.$('^').$nodes = app.http(
          `/~/applications/${ controller.params.application_id }/push`,
          ( response, el ) => {
            response.json().then( result => {
              el.$nodes = [
                a.pre( result ),
                a['div.clearfix']( [
                  app.button( {
                    label: app.icon( 'fa fa-check', 'OK' ),
                    onclick: (e,el) => {
                      controller.open( '..' )
                    },
                    title: 'Return to application',
                  } ),
                ] ),
              ]
            } )
          },
          {
            method: 'POST',
            placeholder: a.p(
              app.icon( 'fa fa-spinner fa-spin', 'Pushing commits' )
            )
          }
        )

      },
    } ),

  ] )

]
