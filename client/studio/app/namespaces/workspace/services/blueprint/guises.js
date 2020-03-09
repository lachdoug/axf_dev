app.namespaces.workspace.services.blueprint.guises = blueprint => controller => (a,x) => [

  a.h5( 'Guises' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.guises,
    (f) => [
      f.field( {
        key: 'guises',
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
