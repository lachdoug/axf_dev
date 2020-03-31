cc.dialogue.designer.component = blueprint => f => [

  f.field( {
    key: 'type',
    as: 'select',
    label: false,
    layout: 'vertical',
    selections: {
      output: 'Output',
      form: 'Form',
      report: 'Report',
      markdown: 'Markdown',
      navigation: 'Navigation',
    },
  } ),

  cc.dialogue.designer.output(f),
  cc.dialogue.designer.form(blueprint)(f),
  cc.dialogue.designer.report(blueprint)(f),
  cc.dialogue.designer.markdown(f),
  cc.dialogue.designer.navigation(blueprint)(f),

]
