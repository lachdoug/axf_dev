cc.control.designer.report.form = (f) => [

  cc.collapse( {
    label: 'Options',
    body: [
      f.field( { key: 'call' } ),
      f.field( {
        key: 'submit',
        label: 'Submit',
        as: 'one',
        form: (ff) => ff.row( { columns: [
          ff.field( { key: 'hide', as: 'checkbox', layout: 'vertical', label: false, checkbox: { label: 'Hide button' } } ),
          ff.field( { key: 'label', dependent: { key: 'hide', pattern: '^$' } } ),
        ] } ),
      } ),
    ],
  } ),

  cc.collapse( {
    label: 'Form',
    body: [
      f.field( {
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
