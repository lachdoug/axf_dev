app.namespaces.workspace.services.blueprint.custom_files = blueprint => controller => (a,x) => [

  a.h5( 'Template files' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.templateFiles,
    (f) => [
      f.field( {
        key: 'custom_files',
        as: 'many',
        layout: 'vertical',
        label: false,
        form: (ff) => [

          ff.field( {
            key: 'type',
            as: 'select',
            required: true,
            selections: [
              'actionator',
              'backup',
              'configurator',
              'first_run',
              'service',
              'startup',
              'signal',
            ]
          } ),

          ff.field( {
            key: 'path',
            required: true,
          } ),

          ff.field( {
            key: 'content',
            as: 'code',
            layout: 'vertical',
            code: {
              mode: {
                value: app.codemirrorMode( ff.object.content_mode ),
                selections: app.selections.script_modes,
              },
            },
          } ),

          ff.field( {
            key: 'execute',
            as: 'checkbox',
          } ),

          ff.field( {
            key: 'sudo',
            as: 'checkbox',
          } ),

        ]
      } ),

    ]

  ),

]
