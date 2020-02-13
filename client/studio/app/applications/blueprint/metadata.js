app.applications.blueprint.metadata = blueprint => controller => (a,x) => [

  a.h5( 'Metadata' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.metadata,
    (f) => [
      f.field( {
        key: 'display',
        as: 'one',
        layout: 'vertical',
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'title',
            required: true,
          } ),
          ff.field( {
            key: 'version',
          } ),
          ff.field( {
            key: 'url',
            as: 'input/url',
            label: 'Website URL',
          } ),
        ]
      } ),
      a.legend( 'License' ),
      f.field( {
        key: 'license',
        as: 'one',
        layout: 'vertical',
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'label',
          } ),
          ff.field( {
            key: 'url',
            as: 'input/url',
            label: 'URL',
          } ),
        ]
      } ),
    ]

   ),

]
