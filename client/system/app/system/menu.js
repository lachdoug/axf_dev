app.system.menu = ( controller, systemSettings ) => (a,x) => [

  app.btn(
    app.icon( 'fas fa-hdd', 'System' ),
    () => controller.open( '/system' ),
    {
      class: 'btn btn-outline-primary d-block w-100 text-left',
    }
  ),

  a['div.container'](
    app.system.applications( controller ),
  ),

  a.hr,

  a['div.container'](
    app.system.services( controller ),
  ),


]
