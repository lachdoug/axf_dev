app.applications.index = controller => (a,x) => [

  a.h5( 'Applications' ),

  a['div.clearfix']( a['div.btn-group.float-right']( [
    app.button( {
      label: app.icon( 'fa fa-plus', 'New application' ),
      onclick: (e,el) => {
        controller.open( 'new' )
      },
      title: 'New application',
    } ),
    app.up( controller, 'Return to home' ),
  ] ) ),


  app.http(
    '/~/applications',
    ( applications, el ) => el.$nodes = [

      applications.length == 0 ? 'None' : null,
      applications.map( application => a.p( [
        app.button( {
          label: app.icon( 'fa fa-caret-right', application.name ),
          onclick: (e,el) => {
            controller.open( application.id )
          },
          title: application.remote,
        } ),
      ] ) )
    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading applications' )
      )
    }
  )

]
