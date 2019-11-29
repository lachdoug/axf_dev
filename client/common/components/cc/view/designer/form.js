cc.view.designer.form = (f) => f.field( {
    key: 'form',
    as: 'one',
    label: false,
    layout: 'vertical',
    dependent: {
      target: 'type',
      pattern: '^form$',
    },
    form: (ff) => [

      cc.collapse( {
        label: 'Options',
        body: [
          ff.field( { key: 'scope' } ),
          ff.field( { key: 'receiver' } ),
          ff.field( {
            key: 'submit',
            label: 'Submit',
            as: 'one',
            form: (fff) => [
              fff.field( { key: 'hide', as: 'check' } ),
              fff.field( { key: 'label' } ),
            ]
          } ),
          ff.field( {
            key: 'cancel',
            label: 'Cancel',
            as: 'one',
            form: (fff) => [
              fff.field( { key: 'hide', as: 'check' } ),
              fff.field( { key: 'label' } ),
              fff.field( { key: 'receiver' } ),
            ]
          } ),
        ],
      } ),

      cc.collapse( {
        label: 'Form',
        body: [
          ff.field( {
            key: 'components',
            label: false,
            as: 'many',
            item: 'form component',
            form: cc.view.designer.form.component,
            layout: 'vertical',
          } ),
        ],
      } ),

    ]
  } )
