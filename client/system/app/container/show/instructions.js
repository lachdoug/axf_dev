app.container.show.instructions = ( controller, container ) => (a,x) => {

  let instructionButton = ( label, instruction, icon ) => app.btn(
    app.icon( icon, label ),
    () => instructor.$instruct( instruction )
  )

  switch( container.status.state ) {
    case 'stopped':
    return [
      instructionButton( 'Start', 'start', 'fas fa-play-circle' ),
      instructionButton( 'Recreate', 'recreate', 'fas fa-check-circle' ),
      instructionButton( 'Destroy', 'destroy', 'fas fa-times-circle' ),
    ]
    case 'running':
    return [
      instructionButton( 'Restart', 'restart', 'far fa-play-circle' ),
      name === 'control' ? null : [
        instructionButton( 'Stop', 'stop', 'fas fa-stop-circle' ),
        instructionButton( 'Pause', 'pause', 'fas fa-pause-circle' ),
        // instructionButton( 'Halt', 'halt', 'far fa-stop-circle' ),
      ],
    ]
    case 'paused':
    return [
      instructionButton( 'Unpause', 'unpause', 'far fa-pause-circle' ),
    ]
    case 'nocontainer':
    return [
      instructionButton( 'Create', 'create', 'far fa-check-circle' ),
      container.type === 'application' ? [
        instructionButton( 'Reinstall', 'reinstall', 'fas fa-plus-circle' ),
        app.btn(
          app.icon( 'fas fa-minus-circle', 'Uninstall' ),
          () => controller.open( 'uninstall' )
        ),
      ] : null,
    ]
    default:
    return null

  }

}
