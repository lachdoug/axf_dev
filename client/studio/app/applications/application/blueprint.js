app.applications.application.blueprint = controller => (a,x) => [

  app.http(
    `/~/applications/${ controller.params.application_id }/blueprint`,
    ( response, el ) => {
      let blueprint = response.content

      el.$nodes = [

        a['div.clearfix']( [

          app.button( {
            label: app.icon( 'fa fa-caret-right', 'Views' ),
            // class: 'btn btn-secondary',
            title: 'Views',
            onclick: (e,el) => {
              controller.open('../views')
            },
          } ),

          a['div.btn-group.float-right']( [
            app.up( controller, 'Return to application' ),
          ] ),
        ] ),

        a.h5( blueprint.branch ),

        a.pre( blueprint.content )
      ]

    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', 'Loading application blueprint' )
      )
    }
  )

]
