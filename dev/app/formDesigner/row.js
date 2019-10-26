app.formDesigner.row = (f) => (a,x) => [

  app.collapse( {
    label: 'Columns',
    body: [

      f.field( {
        key: 'columns',
        as: 'many',
        item: 'column',
        form: app.formDesigner.component,
        label: false,
        layout: 'vertical',
      } ),

    ],
  } ),

]
