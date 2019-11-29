app.applications.application.show = controller => (a,x) => [

  app.http(
    `/~/applications/${ controller.params.application_id }`,
    ( response, el ) => {
      let application = response.content

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
            app.up( controller, 'Return to applications' ),

          ] ),
        ] ),

        a.h5( application.branch ),

        a.p( application.readme ?
          app.md( application.readme ) :
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
            title: 'Delete application',
          } ),
        ) ),
      ]

    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', 'Loading application' )
      )
    }
  )

]
