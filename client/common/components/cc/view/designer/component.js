cc.control.designer.component = (f) => [

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

  cc.control.designer.template(f),
  cc.control.designer.form(f),
  cc.control.designer.report(f),

]
