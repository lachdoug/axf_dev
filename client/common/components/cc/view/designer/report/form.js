cc.view.designer.report.form = (f) => [

  cc.collapse( {
    label: 'Form',
    body: [
      f.field( {
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
