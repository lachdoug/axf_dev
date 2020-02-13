app.applications.blueprint.custom_php_inis = blueprint => controller => (a,x) => [

  a.h5( 'Custom PHP inis' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.customPhpInis,
    (f) => [
      f.field( {
        key: 'custom_php_inis',
        as: 'many',
        addable: true,
        removable: true,
        sortable: true,
        layout: 'vertical',
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'content',
            as: 'code',
            layout: 'vertical',
            label: false,
            code: { mode: 'php' },
          } ),
        ]
      } ),

    ]

  ),

]
