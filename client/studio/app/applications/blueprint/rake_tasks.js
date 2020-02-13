app.applications.blueprint.rake_tasks = blueprint => controller => (a,x) => [

  a.h5( 'Rake tasks' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.rakeTasks,
    (f) => [
      f.field( {
        key: 'rake_tasks',
        as: 'table',
        addable: true,
        removable: true,
        sortable: true,
        layout: 'vertical',
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'action',
            required: true,
            thTag: {
              width: null,
            },
          } ),
          ff.field( {
            key: 'always_run',
            as: 'check',
            thTag: {
              width: '100px',
            },
          } ),
        ]
      } ),

    ]

  ),

]
