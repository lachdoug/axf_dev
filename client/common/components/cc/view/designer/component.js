cc.view.designer.component = (f) => [

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

  cc.view.designer.template(f),
  cc.view.designer.form(f),
  cc.view.designer.report(f),

]
