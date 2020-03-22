cc.control.designer.form.row = (f) => (a,x) => [

  cc.collapse( {
    label: 'Columns',
    body: [

      f.field( {
        key: 'columns',
        as: 'many',
        item: 'column',
        form: cc.control.designer.form.component,
        label: false,
        layout: 'vertical',
      } ),

    ],
  } ),

]
