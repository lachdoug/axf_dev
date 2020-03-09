app.container.environment.show = type => controller => (a,x) => {

  const name = controller.params.name

  let path = `/~/~/containers/${
    type === 'service' ? 'service' : 'engine'
  }/${ name }`

  return [

    a['div.clearfix']( a['div.float-right']( app.up( controller, 'Close' ) ) ),
    app.http(
      path,
      ( container, el ) => {

        let editable = container.environments.filter( env => !env.immutable ).length

        el.$nodes = [
          app.btn(
            app.icon( 'fa fa-edit', 'Edit' ),
            () => controller.open( 'edit' )
          ),
          app.report( {
            object: container,
            report: (r) => [
              r.field( {
                key: 'environments',
                as: 'many',
                label: false,
                layout: 'vertical',
                report: (rr) => [
                  rr.field( {
                    key: 'value',
                    label: rr.object.name,
                  } ),
                ]
              } )
            ]
          } ),

        ]

      },
      {
        placeholder: app.hourglass( 'Loading environment' )
      }

    ),

  ]


}
