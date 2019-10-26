app.viewDesigner.component = (f) => [

  f.field( {
    key: 'type',
    as: 'select',
    label: false,
    layout: 'vertical',
    selections: {
      '': '',
      form: 'Form',
      report: 'Report',
      template: 'Template',
    },
  } ),

  app.templateDesigner(f),
  app.formDesigner(f),

]
