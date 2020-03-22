app.namespaces.workspace.services.blueprint.log_directories = blueprint => controller => (a,x) => [

  a.h5( 'Log directories' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.logDirectories,
    (f) => [
      f.field( {
        key: 'log_directories',
        as: 'table',
        layout: 'vertical',
        form: (ff) => [
          ff.field( {
            key: 'path',
            required: true,
          } ),
        ]
      } ),

    ]

  ),

]
