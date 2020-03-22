cc.control.designer.form = (f) => f.field( {
  key: 'form',
  as: 'one',
  label: false,
  layout: 'vertical',
  dependent: {
    key: 'type',
    pattern: '^form$',
  },
  form: (ff) => [

    cc.collapse( {
      label: 'Options',
      body: [
        ff.field( { key: 'call' } ),
        ff.field( {
          key: 'cancel',
          label: 'Cancel',
          as: 'one',
          form: (fff) => fff.row( { columns: [
            fff.field( { key: 'hide', as: 'checkbox', layout: 'vertical', label: false, checkbox: { label: 'Hide button' } } ),
            fff.field( { key: 'label', dependent: { key: 'hide', pattern: '^$' } } ),
          ] } ),
        } ),
        ff.field( {
          key: 'submit',
          label: 'Submit',
          as: 'one',
          form: (fff) => fff.row( { columns: [
            fff.field( { key: 'hide', as: 'checkbox', layout: 'vertical', label: false, checkbox: { label: 'Hide button' } } ),
            fff.field( { key: 'label', dependent: { key: 'hide', pattern: '^$' } } ),
          ] } ),
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
          form: cc.control.designer.form.component,
          layout: 'vertical',
        } ),
      ],
    } ),

  ]
} )
