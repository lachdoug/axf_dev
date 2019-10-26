app.formDesigner = (f) => f.field( {
    key: 'form',
    as: 'one',
    label: false,
    layout: 'vertical',
    dependent: {
      target: 'type',
      pattern: '^form$',
    },
    form: (ff) => [

      app.collapse( {
        label: 'Options',
        body: [
          ff.field( {
            key: 'scope',
            as: 'one',
            form: (fff) => [
              fff.field( { key: 'get' } ),
              fff.field( { key: 'set' } ),
            ]
          } ),
        ],
      } ),

      app.collapse( {
        label: 'Form',
        body: [
          ff.field( {
            key: 'components',
            label: false,
            as: 'many',
            item: 'form component',
            form: app.formDesigner.component,
            layout: 'vertical',
          } ),
        ],
      } ),

    ]
  } )
