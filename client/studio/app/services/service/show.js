app.services.service.show = controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/services/${ controller.params.service_id }`,
    ( response, el ) => {
      let service = response.content

      el.$nodes = [

        a['div.clearfix']( [
          app.button( {
            label: app.icon( 'fa fa-caret-right', 'Blueprint' ),
            title: 'Blueprint',
            onclick: (e,el) => {
              controller.open( 'blueprint' )
            }
          } ),
          app.button( {
            label: app.icon( 'fa fa-caret-right', 'Readme' ),
            title: 'Readme',
            onclick: (e,el) => {
              controller.open( 'readme' )
            }
          } ),
          app.button( {
            label: app.icon( 'fa fa-caret-right', 'License' ),
            title: 'License',
            onclick: (e,el) => {
              controller.open( 'license' )
            }
          } ),
          a['div.btn-group.float-right']( [
            app.button( {
              label: app.icon( 'fab fa-git-alt', 'Repo' ),
              title: 'Repo',
              onclick: (e,el) => {
                controller.open( 'repo' )
              }
            } ),
            app.up( controller, 'Return to services' ),

          ] ),
        ] ),

        a.h5( service.branch ),

        a.p( service.readme ?
          app.md( service.readme ) :
          a['.error']( 'No readme!' ),
          { class: 'border border-light p-2' }
        ),

        a['div.clearfix']( a['div.btn-group.float-right'](
          app.button( {
            label: app.icon( 'fa fa-trash', 'Delete' ),
            class: 'btn btn-outline-warning',
            onclick: (e,el) => {
              controller.open( 'delete' )
            },
            title: 'Delete service',
          } ),
        ) ),
      ]

    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', 'Loading service' )
      )
    }
  )

]
