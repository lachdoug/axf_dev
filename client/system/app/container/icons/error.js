app.container.icons.error = function ( status ) {

  let component = []

  if ( status.had_oom ) {
    component.push(
      ' ',
      app.icon( 'fas fa-microchip' ),
    )
  }

  if ( status.restart_required ) {
    component.push(
      ' ',
      app.icon( 'far fa-play-circle' ),
    )
  }

  if ( status.error ) {
    component.push(
      ' ',
      app.icon( 'fas fa-exclamation-triangle' ),
    )
  }

  return (a,x) => a['app-container-error-icon'](
    component
  )

}
