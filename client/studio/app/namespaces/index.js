app.namespaces.index = (controller) => (a,x) => [

  a.h5( 'Namespaces' ),

  a['div.clearfix']( a['div.btn-group.float-right']( [
    app.button( {
      label: app.icon( 'fa fa-plus', 'New namespace' ),
      onclick: (e,el) => {
        controller.open( 'new' )
      },
      title: 'New services namespace',
    } ),
    app.up( controller, 'Return to home' ),

    // app.button( {
    //   label: app.icon( 'far fa-list-alt', 'Namespaces' ),
    //   onclick: (e,el) => controller.open( '/namespaces' )
    // } ),
  ] ) ),

  app.http(
    '/~/namespaces',
    ( response, el ) => {
      response.json().then( namespaces => {

        el.$nodes = [
          namespaces.length == 0 ? 'None' : null,
          namespaces.map( namespace => a.p( [
            app.button( {
              label: app.icon( 'fa fa-caret-right', namespace.name ),
              onclick: (e,el) => {
                controller.open( namespace.id )
              },
              title: namespace.remote,
            } ),
          ] ) )
        ]

      } )

    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', 'Loading namespaces' )
      )
    }
  )

]
