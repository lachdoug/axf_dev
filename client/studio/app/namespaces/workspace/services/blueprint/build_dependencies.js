app.namespaces.workspace.services.blueprint.build_dependencies = blueprint => controller => (a,x) => [

  a.h5( 'Build dependencies' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.buildDependencies,
    (f) => [
      f.field( {
        key: 'build_dependencies',
        as: 'table',
        addable: true,
        removable: true,
        sortable: true,
        layout: 'vertical',
        form: (ff) => [
          ff.field( {
            key: 'type',
            required: true,
          } ),
        ]
      } ),

    ]

  ),

]
