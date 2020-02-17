app.home = ( controller ) => (a,x) => [

  app.http(
    '/~/',
    ( response, el ) => {

      response.json().then( home => el.$nodes = [

        a.hr,

        a['div.clearfix']( [

          a['div.btn-group.float-right']( [

            app.button( {
              label: app.icon( 'fa fa-arrow-right' ),
              title: 'All applications',
              onclick: () => controller.open(
                '/applications'
              ),
            } ),

          ] ),

          home.applications.map( (application) => app.button( {
            label: app.icon( 'fa fa-caret-right', application.name ),
            title: `Application ${ application.name }`,
            onclick: () => controller.open( `/applications/${ application.id }` ),
          } ) ),

        ] ),


        home.namespaces.map( (namespace) => [

          a.hr,

          a['div.clearfix']( [

            a['div.btn-group.float-right']( [

              app.button( {
                label: app.icon( 'fa fa-arrow-right' ),
                title: `All ${ namespace.name } services`,
                onclick: () => controller.open(
                  `/namespaces/${ namespace.id }/workspace/services`
                ),
              } ),

            ] ),

            a['div.pt-2'](
              a.strong( `${ namespace.name }` ),
            ),
          ] ),

          namespace.services.map( (service) => app.button( {
            label: app.icon( 'fa fa-caret-right', service.name ),
            title: `Application ${ service.name }`,
            onclick: () => controller.open(
              `/namespaces/${ namespace.id }/workspace/services/${ service.id }`
            ),
          } ) ),


        ] ),

        a.hr,



      ] )


    }
  )
]
