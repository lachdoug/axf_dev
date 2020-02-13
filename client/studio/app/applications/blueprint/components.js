app.applications.blueprint.components = blueprint => controller => (a,x) => [

  a.h5( 'Components' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.components,
    (f) => [
      f.field( {
        key: 'path',
        // required: true,
      } ),
      f.field( {
        key: 'extract',
        as: 'check',
      } ),
      f.field( {
        key: 'sources',
        as: 'many',
        addable: true,
        removable: true,
        sortable: true,
        layout: 'vertical',
        form: (ff) => [
          ff.field( {
            key: 'label',
            required: true,
          } ),
          ff.field( {
            key: 'url',
            as: 'input/url',
            label: 'URL',
          } ),
          ff.field( {
            key: 'install_script',
            as: 'one',
            form: (fff) => [
              fff.field( {
                key: 'content',
                as: 'code',
                layout: 'vertical',
                label: false,
                code: {
                  mode: {
                    value: fff.object.content_mode,
                    selections: app.selections.script_modes,
                  },
                },
              } ),
            ],
          } ),
        ]
      } ),

    ]

  ),

]
