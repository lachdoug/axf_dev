app.applications.blueprint.actionators.
form = ( controller, blueprint, actionator ) => (a,x) => {

  let heading = actionator.isNew ?
    'New actionator':
    `Edit actionator ${ actionator.id + 1 }`

  return [

    a.h5( heading ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      actionator,
      (f) => [
        f.field( {
          key: 'name',
          required: true,
        } ),
        f.field( {
          key: 'label',
        } ),
        f.field( {
          key: 'description',
          as: 'markdown',
        } ),
        f.field( {
          key: 'return_type',
          as: 'select',
          placeholder: ' ',
          selections: app.selections.actionator_return_types,
        } ),
        f.field( {
          key: 'return_file_name',
        } ),
        f.field( {
          key: 'timeout',
          as: 'input/number',
        } ),
        f.field( {
          key: 'enable_logging',
          as: 'check',
        } ),
        f.field( {
          key: 'background',
          as: 'check',
        } ),
        f.field( {
          key: 'script',
          as: 'one',
          form: (ff) => [
            ff.field( {
              key: 'content',
              label: false,
              layout: 'vertical',
              as: 'code',
              code: {
                mode: {
                  value: ff.object.content_mode,
                  selections: app.selections.script_modes,
                },
              },
            } ),
          ]
        } ),
      ]

    ),

  ]

}
