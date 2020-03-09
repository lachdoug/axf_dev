app.namespaces.workspace.services.blueprint.consumers = blueprint => controller => (a,x) => [

  a.h5( 'Consumers' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.consumers,
    (f) => [
      f.field( {
        key: 'accepts',
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
