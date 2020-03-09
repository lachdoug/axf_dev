app.container.icons.state = function ( status ) {

  const state = status.state

  return (a,x) => a['app-container-state-icon'](
    app.icon( app.container.icons.state.faClass( state ) )
  )

}

app.container.icons.state.faClass = function ( state ) {

  if ( state == 'running' ) {
    return 'fas fa-play'
  } else if ( state == 'stopped' ) {
    return 'fas fa-stop'
  } else if ( state == 'paused' ) {
    return 'fas fa-pause'
  } else if ( state == 'nocontainer' ) {
    return 'far fa-circle'
  } else {
    return 'question'
  }

}
