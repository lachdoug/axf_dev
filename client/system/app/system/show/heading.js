app.system.show.heading = controller => (a,x) => a['div.clearfix']( [

  a['div.float-right'](
    x.popup( app.btn( app.icon( 'fas fa-power-off' ) ), {
      menu: [
        app.btn(
          'Restart',
          () => controller.open( 'restart' ),
          { class: 'btn app-btn d-block w-100 text-left' }
        ),
        app.btn(
          'Shutdown',
          () => controller.open( 'shutdown' ),
          { class: 'btn app-btn d-block w-100 text-left' }
        ),
      ]
    } ),
  ),

  a['app-system-state']( null, {
    $update: (el,system) => {
      el.$nodes = [
        a.h3( system.hostname ),
        app.system.show.errors( controller, system ),
      ]
    },
    $state: {},
    $init: function() {
      this.$state = system.$state
    },
  } ),

] )
