app.system.update.os = ( controller ) => (a,x) => a['app-system-update-os']( [

  a.h3( "Update Operating system" ),

  a['div.clearfix'](
    a['div.float-right']( [
      app.btn( app.icon( 'fa fa-arrow-up' ), (e,el) => controller.open() ),
    ] )
  ),

  a['app-system-update-os-http'](
    [
      a.p( 'Update Operating system?' ),
      app.btn(
        app.icon( "fa fa-check", "OK" ),
        (e,el) => el.$('^app-system-update-os-http').$start(),
        { class: 'btn btn-primary' }
      ),
    ],
    {
      $start: function() {
        this.$nodes = app.http(
          '/~/~/system/control/base_os/update',
          ( response, el ) => { el.$send( 'app.os.updating' ) },
          { placeholder: app.hourglass( 'Starting update...' ) }
        )
      },
    }
  ),
  //

] )
