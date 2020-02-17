app.namespaces.pull = controller => (a,x) => [

  a.p( 'Pull namespace updates?' ),

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
    title: 'Pull namespace',
    // confirm: 'Are you sure that you want to delete this service?',
    onclick: (e,el) => {

      el.$('^').$nodes = app.http(
        `/~/namespaces/${ controller.params.namespace_id }/pull`,
        ( response, el ) => {
          response.json().then(
            service => el.$nodes = [
              a.p( 'Namespace has been pulled.' ),
              a['div.clearfix']( [
                app.button( {
                  label: app.icon( 'fa fa-check', 'OK' ),
                  onclick: (e,el) => {
                    controller.open( '..' )
                  },
                  title: 'Return to services',
                } ),
              ] ),
            ]
          )
        },
        {
          // method: 'DELETE',
          placeholder: a.p(
            app.icon( 'fa fa-spinner fa-spin', 'Pulling namespace' )
          )
        }
      )

    },
  } ),

]
