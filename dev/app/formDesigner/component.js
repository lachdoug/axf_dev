app.formDesigner.component = (f) => [

  f.field( {
    key: 'type',
    as: 'select',
    label: false,
    layout: 'vertical',
    selections: {
      '': '',
      field: 'Field',
      divider0: '—————',
      fieldset: 'Fieldset',
      row: 'Row',
      divider1: '—————',
      template: 'Template',
      // form: 'Form',
      // report: 'Report',
    },
  } ),

  f.field( {
    key: 'field',
    as: 'one',
    label: false,
    layout: 'vertical',
    dependent: {
      target: 'type',
      pattern: '^field$',
    },
    form: app.formDesigner.field
  } ),

  f.field( {
    key: 'fieldset',
    as: 'one',
    label: false,
    layout: 'vertical',
    dependent: {
      target: 'type',
      pattern: '^fieldset$',
    },
    form: app.formDesigner.fieldset
  } ),

  f.field( {
    key: 'row',
    as: 'one',
    label: false,
    layout: 'vertical',
    dependent: {
      target: 'type',
      pattern: '^row$',
    },
    form: app.formDesigner.row
  } ),

  f.field( {
    key: 'template',
    as: 'markdown',
    label: false,
    layout: 'vertical',
    dependent: {
      target: 'type',
      pattern: '^template$',
    },
  } ),

]
