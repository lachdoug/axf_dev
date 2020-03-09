app.namespaces.workspace.services.blueprint.scripts = blueprint => controller => (a,x) => [

  a.h5( 'Scripts' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.scripts,
    (f) => [
      'start',
      'start_sudo',
      'install',
      'install_sudo',
      'post_install',
      'post_install_sudo',
      'first_run',
      'first_run_sudo',
      'backup',
      'backup_sudo',
      'restore',
      'restore_sudo',
      'shutdown',
      'shutdown_sudo',
    ].map( script => f.field( {
      key: script,
      as: 'one',
      layout: 'vertical',
      form: (ff) => [
        ff.field( {
          key: 'content',
          as: 'code',
          layout: 'vertical',
          label: false,
          code: {
            mode: {
              value: ff.object.content_mode,
              selections: app.selections.script_modes,
            },
          },
        } ),
      ]
    } ) )

  ),

]
