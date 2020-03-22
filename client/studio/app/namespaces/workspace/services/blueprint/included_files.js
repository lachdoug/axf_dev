app.namespaces.workspace.services.blueprint.included_files = blueprint => controller => (a,x) => [

  a.h5( 'Included files' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.includedFiles,
    (f) => [
      f.field( {
        key: 'included_files',
        as: 'many',
        layout: 'vertical',
        label: false,
        form: (ff) => [

          ff.field( {
            key: 'source',
            required: true,
          } ),

          ff.field( {
            key: 'destination',
            required: true,
          } ),

          ff.field( {
            key: 'owner',
          } ),

          ff.field( {
            key: 'group',
          } ),

          ff.field( {
            key: 'permissions',
          } ),

          ff.field( {
            key: 'template',
            as: 'checkbox',
          } ),

        ]
      } ),

    ]

  ),

]
