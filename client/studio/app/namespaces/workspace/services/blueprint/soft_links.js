app.namespaces.workspace.services.blueprint.soft_links = blueprint => controller => (a,x) => [

  a.h5( 'Constants' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.softLinks,
    (f) => [
      f.field( {
        key: 'soft_links',
        as: 'table',
        layout: 'vertical',
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'source',
            // required: true,
          } ),
          ff.field( {
            key: 'target',
          } ),
          ff.field( {
            key: 'owner',
          } ),
        ]
      } ),

    ]

  ),

]
