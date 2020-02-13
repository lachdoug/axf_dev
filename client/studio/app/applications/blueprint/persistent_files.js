app.applications.blueprint.persistent_files = blueprint => controller => (a,x) => [

  a.h5( 'Persistent files' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.persistentFiles,
    (f) => [
      f.field( {
        key: 'persistent_files',
        as: 'table',
        addable: true,
        removable: true,
        sortable: true,
        layout: 'vertical',
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'path',
            required: true,
          } ),
          ff.field( {
            key: 'volume_name',
          } ),
        ]
      } ),

    ]

  ),

]
