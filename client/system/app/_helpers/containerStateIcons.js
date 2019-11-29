app.containerStateIcons = function ( containerStatus ) {

  const containerState = containerStatus.state
  const containerSetState = containerStatus.set_state

  let component = []

  if ( containerState == containerSetState ) {
    component.push( app.icon( app.containerStateIcons.stateIconClass( containerState ) ) )
  } else {
    component.push(
      app.icon( app.containerStateIcons.stateIconClass( containerState ) ),
      ' ',
      app.icon( 'fas fa-long-arrow-alt-right' ),
      ' ',
      app.icon( app.containerStateIcons.stateIconClass( containerSetState ) ),
    )
  }

  return (a,x) => a['app-container-state-icon'](
    component
  )

}

app.containerStateIcons.stateIconClass = function ( containerState ) {

  if ( containerState == 'running' ) {
    return 'fas fa-play'
  } else if ( containerState == 'stopped' ) {
    return 'fas fa-stop'
  } else if ( containerState == 'paused' ) {
    return 'fas fa-pause'
  } else if ( containerState == 'nocontainer' ) {
    return 'far fa-circle'
  } else {
    return 'question'
  }

}
