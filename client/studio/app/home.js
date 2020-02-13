app.home = ( controller ) => (a,x) => [

  app.http(
    '/~/',
    ( response, el ) => {

      response.json().then( home => el.$nodes = [
        // x.popup( "Hi", {
        //   menu: [ {
        //     label: 'Hi'
        //   } ]
        // } ),

        // home,

        app.button( {
          label: app.icon( 'fa fa-caret-right', 'Applications' ),
          onclick: () => controller.open(
            'applications'
          ),
        } ),

        home.applications.active.map( (application) => app.button( {
          label: app.icon( 'fa fa-caret-right', application.name ),
          onclick: () => controller.open( `/applications/${ application.id }` ),
        } ) ),

        home.namespaces.map( (namespace) => [

          a.h5( `${ namespace.name } services` ),

          namespace.services.active.map( (service) => app.button( {
            label: app.icon( 'fa fa-caret-right', service.name ),
            onclick: () => controller.open(
              `/services/${ service.id }`
            ),
          } ) ),

        ] ),




      ] )


    }
  )
]
