app.namespaces.workspace.services.blueprint.constants = blueprint => controller => (a,x) => [

  a.h5( 'Constants' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.constants,
    (f) => [
      f.field( {
        key: 'constants',
        as: 'table',
        layout: 'vertical',
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'name',
            required: true,
          } ),
          ff.field( {
            key: 'value',
          } ),
        ]
      } ),

    ]

  ),

]
