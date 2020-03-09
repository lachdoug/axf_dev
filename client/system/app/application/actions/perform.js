app.application.actions.perform = type => controller => (a,x) => {

  const containerName = controller.params.name
  const actionName = controller.params.action_name

  let containerPath = `/~/~/containers/engine/${ containerName }`

  return [

    app.http(
      `${ containerPath }/blueprint`,
      ( blueprint, el ) => {

        let action = x.lib.object.dig(
          blueprint, [ 'software', 'actionators' ], []
        ).find( action => action.name === actionName )

        el.$nodes = app.container.actions.perform( controller, containerPath, action )

      },
      {
        placeholder: app.hourglass( 'Loading action' )
      }

    ),

  ]

}
