app.namespaces.index = controller => (a,x) => [

  a.h5( 'Providers' ),

  a['div.clearfix']( a['div.btn-group.float-right']( [
    app.button( {
      label: app.icon( 'fa fa-plus', 'New provider' ),
      onclick: (e,el) => {
        controller.open( 'new' )
      },
      title: 'New services provider',
    } ),
    app.close( controller, 'Return to home' ),

    // app.button( {
    //   label: app.icon( 'far fa-list-alt', 'Namespaces' ),
    //   onclick: (e,el) => controller.open( '/namespaces' )
    // } ),
  ] ) ),

  app.http(
    '/~/namespaces',
    ( namespaces, el ) => el.$nodes = [
      namespaces.length == 0 ? 'None' : null,
      namespaces.map( namespace => a.p( [
        app.button( {
          label: app.icon( 'fa fa-caret-right', namespace.name ),
          onclick: (e,el) => {
            controller.open( namespace.id )
          },
          title: namespace.name,
        } ),
      ] ) )
    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading providers' )
      )
    }
  )

]
