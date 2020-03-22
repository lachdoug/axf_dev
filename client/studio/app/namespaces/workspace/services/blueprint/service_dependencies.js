app.namespaces.workspace.services.blueprint.service_dependencies = blueprint => controller => (a,x) => [

  a.h5( 'Service dependencies' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.serviceDependencies,
    (f) => [
      f.field( {
        key: 'service_dependencies',
        as: 'table',
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
