app.home = ( controller ) => (a,x) => [

  // a.h3( 'Home' ),
  app.http(
    '/~/',
    ( response, el ) => {
      let home = response.content || []

      el.$nodes = [
        // x.popup( "Hi", {
        //   menu: [ {
        //     label: 'Hi'
        //   } ]
        // } ),

        // home,

        a.h3( 'Applications' ),

        home.applications.active.map( (application) => app.button( {
          label: app.icon( 'fa fa-caret-right', application.name ),
          onclick: () => controller.open(
            `/applications/${ application.id }`
          ),
        } ) ),

        a.h3( 'Services' ),

        home.namespaces.map( (namespace) => [

          a.h5( namespace.name ),

          namespace.services.active.map( (service) => app.button( {
            label: app.icon( 'fa fa-caret-right', service.name ),
            onclick: () => controller.open(
              `/services/${ service.id }`
            ),
          } ) ),

        ] ),




      ]

    }
  )
]
