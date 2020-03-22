app.applications.blueprint.replacement_strings = blueprint => controller => (a,x) => [

  a.h5( 'Replacement strings' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.replacementStrings,
    (f) => [
      f.field( {
        key: 'replacement_strings',
        as: 'many',
        layout: 'vertical',
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'string',
            required: true,
          } ),
          ff.field( {
            key: 'source_file',
            required: true,
          } ),
          ff.field( {
            key: 'destination_file',
            required: true,
          } ),
        ]
      } ),

    ]

  ),

]
