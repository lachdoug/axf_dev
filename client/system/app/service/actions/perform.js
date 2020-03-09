app.service.actions.perform = type => controller => (a,x) => {

  const containerName = controller.params.name
  const actionName = controller.params.action_name

  let containerPath = `/~/~/containers/service/${ containerName }`

  return [

    app.http(
      `${ containerPath }/service_definition`,
      ( definition, el ) => {

        let action = x.lib.object.dig(
          definition, [ 'service_actionators' ], {}
        )[ actionName ]

        el.$nodes = app.container.actions.perform( controller, containerPath, action )

      },
      {
        placeholder: app.hourglass( 'Loading action' )
      }

    ),

  ]

}
