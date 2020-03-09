app.system.restart = controller => (a,x) => [

  a.h3( "Restart system" ),

  a['app-system-restart-http']( null, {
    $start: function() {
      this.$nodes = app.http(
        '/~/~/system/control/base_os/restart',
        ( response, el ) => el.$send( 'app.restarting' ),
      )
    },
  } ),

  app.btn(
    app.icon( "fa fa-times", "Cancel" ),
    () => controller.open( '..' ),
    { class: 'btn btn-secondary' }
  ),

  a('&nbsp;'),

  app.btn(
    app.icon( "fa fa-check", "OK" ),
    (e,el) => el.$('^app-system-restart app-system-restart-http').$start(),
    { class: 'btn btn-primary' }
  ),

]
