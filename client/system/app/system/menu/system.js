app.system.menu.
system = ( system, controller ) => (a,x) => a['div.container']( [

  app.btn(
    [
      'System',
      a['app-system-state']( (el,system) => [
        ( system.needs_reboot || system.needs_engines_update || system.needs_base_update ) ? a['.text-warning']( app.icon( 'fa fa-bell'  ) ) : null,
        system.did_build_fail ? a['.error']( app.icon( 'fas fa-tools' ) ) : null,
        system.is_building ? a['.text-info']( app.icon( 'fas fa-tools' ) ) : null,
      ], {
        id: 'system',
        $state: system,
        // $mergeState: function( update ) {
        //   console.log( this.$state, update )
        //   this.$state = { ...this.$state, ...update }
        // },
      } ),
    ],
    () => controller.open( '/system' ),
    {
      class: 'btn btn-outline-secondary app-btn d-block w-100 text-left mt-3',
    }
  ),


] ),
