app.applications.pull = controller => (a,x) => [

  a.p( 'Pull application?' ),

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
    label: app.icon( 'fas fa-file-download', 'Pull' ),
    class: 'btn btn-primary',
    title: 'Pull application',
    // confirm: 'Are you sure that you want to delete this service?',
    onclick: (e,el) => {

      el.$('^').$nodes = app.http(
        `/~/applications/${ controller.params.application_id }/pull`,
        ( pull, el ) => el.$nodes = [
          a.pre( pull.message ),
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
          // method: 'DELETE',
          placeholder: a.p(
            app.hourglass( 'Pulling application' )
          )
        }
      )

    },
  } ),

]
