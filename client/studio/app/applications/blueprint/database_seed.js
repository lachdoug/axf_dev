app.applications.blueprint.database_seed = blueprint => controller => (a,x) => [

  a.h5( 'Database seed' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.databaseSeed,
    (f) => [

      f.field( {
        key: 'content',
        as: 'code',
        layout: 'vertical',
        label: false,
        code: {
          mode: {
            value: app.codemirrorMode( f.object.content_mode ),
            selections: app.selections.database_seed_modes,
          },
        },
      } ),

      f.field( {
        key: 'script',
        as: 'checkbox',
      } )


    ]

  ),

]
