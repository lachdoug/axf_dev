app.namespaces.workspace.services.blueprint.file_permissions = blueprint => controller => (a,x) => [

  a.h5( 'File permissions' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.filePermissions,
    (f) => [
      f.field( {
        key: 'file_permissions',
        as: 'many',
        layout: 'vertical',
        label: false,
        form: (ff) => [

          ff.field( {
            key: 'path',
            required: true,
            hint: 'Relative to /home/ (except when path prefixed with /usr/local/ or /home/ ).'
          } ),

          ff.field( {
            key: 'recursive',
            as: 'checkbox',
          } ),

          ff.field( {
            key: 'user',
          } ),

          ff.field( {
            key: 'group',
          } ),

          ff.field( {
            key: 'permissions',
          } ),

          ff.field( {
            key: 'create',
            as: 'select',
            placeholder: ' ',
            selections: {
              file: 'File',
              dir: 'Dir',
            }
          } ),

        ]
      } ),

    ]

  ),

]
