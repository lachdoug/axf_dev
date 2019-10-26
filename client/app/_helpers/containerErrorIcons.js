app.containerErrorIcons = function ( containerStatus ) {

  const containerState = containerStatus.state
  const containerSetState = containerStatus.set_state

  let component = []

  if ( containerStatus.oom ) {
    component.push(
      ' ',
      app.icon( 'fas fa-microchip' ),
    )
  }

  if ( containerStatus.error ) {
    component.push(
      ' ',
      app.icon( 'fas fa-exclamation-triangle' ),
    )
  }

  return (a,x) => a['app-container-error-icon'](
    component
  )

}
