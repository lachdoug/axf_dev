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
            as: 'checkbox',
            thTag: {
              width: '100px',
            },
          } ),
        ]
      } ),

    ]

  ),

]
