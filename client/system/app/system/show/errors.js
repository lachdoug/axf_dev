app.system.show.errors = ( controller, system ) => (a,x) => a.p( [
  system.needs_reboot ? app.btn(
    a['.text-warning']( app.icon( 'fa fa-bell', 'Needs restart' ) ),
    () => controller.open( 'restart' ),
  ) : null,
  system.needs_engines_update ? app.btn(
    a['.text-warning']( app.icon( 'fa fa-bell', 'Needs Engines update' ) ),
    () => controller.open( 'update' ),
  ) : null,
  system.needs_base_update ? app.btn(
    a['.text-warning']( app.icon( 'fa fa-bell', 'Needs OS update' ) ),
    () => controller.open( 'update_os' ),
  ) : null,
  system.did_build_fail ? app.btn(
    a['.error']( app.icon( 'fas fa-tools', 'Install failed' ) ),
    () => controller.open( 'last_install' ),
  ) : null,
  system.is_building ? app.btn(
    a['.text-info']( app.icon( 'fas fa-tools' , 'Installing' ) ),
    () => controller.open( 'install/monitor' ),
  ) : null,
] )
