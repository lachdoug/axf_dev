app.applications.blueprint.external_repositories = blueprint => controller => (a,x) => [

  a.h5( 'External repositories' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.externalRepositories,
    (f) => [
      f.field( {
        key: 'external_repositories',
        as: 'table',
        addable: true,
        removable: true,
        sortable: true,
        layout: 'vertical',
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'source',
            required: true,
          } ),
          ff.field( {
            key: 'key',
            required: true,
          } ),
        ]
      } ),

    ]

  ),

]
