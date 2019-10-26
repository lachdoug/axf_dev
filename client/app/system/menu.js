app.system.menu = ( controller, systemSettings ) => (a,x) => [
  a['.float-right'](
    app.btn( app.icon( 'fas fa-sign-out-alt' ), () => controller.open( '!/logout' ) )
  ),

  app.btn( app.icon( 'fas fa-home' ), () => controller.open( '/system' ) ),
  a['div.container'](
    app.system.applications( controller ),
  ),
  a.hr,
  a['div.container'](
    app.system.services( controller ),
  ),


]
