app.system.update = ( controller ) => (a,x) => a['app-system-update']( [

  a.h3( "Update Engines system" ),

  a['div.clearfix'](
    a['div.float-right']( [
      app.btn( app.icon( 'fa fa-arrow-up' ), (e,el) => controller.open() ),
    ] )
  ),

  a['app-system-update-http'](
    [
      a.p( 'Update Engines system?' ),
      app.btn(
        app.icon( "fa fa-check", "OK" ),
        (e,el) => el.$('^app-system-update-http').$start(),
        { class: 'btn btn-primary' }
      ),
    ],
    {
      $start: function() {
        this.$nodes = app.http(
          '/~/~/system/control/engines_system/update',
          ( response, el ) => { el.$send( 'app.updating' ) },
          { placeholder: app.hourglass( 'Starting update...' ) }
        )
      },
    }
  ),
  //

] )
