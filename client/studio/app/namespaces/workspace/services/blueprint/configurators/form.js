app.namespaces.workspace.services.blueprint.configurators.
form = ( controller, blueprint, configurator ) => (a,x) => {

  let heading = configurator.isNew ?
    'New configurator':
    `Edit configurator ${ configurator.id + 1 }`

  return [

    a.h5( heading ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      configurator,
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
          key: 'enable_logging',
          as: 'checkbox',
        } ),
        f.field( {
          key: 'no_save',
          as: 'checkbox',
        } ),
        f.field( {
          key: 'set_script',
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
        f.field( {
          key: 'set_script_sudo',
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
        f.field( {
          key: 'read_script',
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
        f.field( {
          key: 'read_script_sudo',
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
