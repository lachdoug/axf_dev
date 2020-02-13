app.applications.blueprint.file_write_permissions = blueprint => controller => (a,x) => [

  a.h5( 'File write permissions' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.fileWritePermissions,
    (f) => [
      f.field( {
        key: 'file_write_permissions',
        as: 'table',
        addable: true,
        removable: true,
        sortable: true,
        layout: 'vertical',
        label: false,
        // thTag: {
        //   width: '120px',
        // },
        form: (ff) => [
          ff.field( {
            key: 'path',
            required: true,
            thTag: {
              width: null,
            },
          } ),
          ff.field( {
            key: 'recursive',
            as: 'check',
            // checked: true,
            thTag: {
              width: '75px',
            },
          } ),
        ]
      } ),

    ]

  ),

]
