cc.view.designer.report.row = (f) => (a,x) => [

  cc.collapse( {
    label: 'Columns',
    body: [

      f.field( {
        key: 'columns',
        as: 'many',
        item: 'column',
        form: cc.view.designer.report.component,
        label: false,
        layout: 'vertical',
      } ),

    ],
  } ),

]
