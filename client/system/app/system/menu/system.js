app.system.menu.
system = ( system, controller ) => (a,x) => a['div.container']( [

  app.btn(
    [
      system.hostname,
      a['app-system-state']( (el,system) => [

        (
          system.needs_reboot ||
          system.needs_engines_update ||
          system.needs_base_update
        ) ?
          a['.text-warning']( app.icon( 'fa fa-bell', ' ' ) ) :
          null,

        system.did_build_fail ?
          a['.error']( app.icon( 'fas fa-tools', ' ' ) ) :
          null,

        system.is_building ?
          a['.text-info']( app.icon( 'fas fa-tools', ' ' ) ) :
          null,

      ], {
        id: 'system',
        $state: system,
      } ),
    ],
    () => controller.open( '/system' ),
    {
      class: 'btn app-btn d-block w-100 text-left mt-3',
    }
  ),

] ),
