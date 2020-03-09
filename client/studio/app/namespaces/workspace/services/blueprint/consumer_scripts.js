app.namespaces.workspace.services.blueprint.consumer_scripts = blueprint => controller => (a,x) => [

  a.h5( 'Consumer scripts' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.consumer_scripts,
    (f) => [
      'add',
      'add_sudo',
      'update',
      'update_sudo',
      'remove',
      'remove_sudo',
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
