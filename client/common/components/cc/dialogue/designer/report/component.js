cc.dialogue.designer.report.component = blueprint => f => [

  f.field( {
    key: 'type',
    as: 'select',
    label: false,
    layout: 'vertical',
    selections: [
      { value: '', label: '' },
      { value: 'field', label: 'Field' },
      { disabled: 'hr' },
      { value: 'fieldset', label: 'Fieldset' },
      { value: 'row', label: 'Row' },
      { disabled: 'hr' },
      { value: 'form', label: 'Form' },
      { value: 'template', label: 'Template' },
    ],
  } ),

  f.field( {
    key: 'field',
    as: 'one',
    label: false,
    layout: 'vertical',
    dependent: {
      key: 'type',
      pattern: '^field$',
    },
    form: cc.dialogue.designer.report.field( blueprint )
  } ),

  f.field( {
    key: 'fieldset',
    as: 'one',
    label: false,
    layout: 'vertical',
    dependent: {
      key: 'type',
      pattern: '^fieldset$',
    },
    form: cc.dialogue.designer.report.fieldset( blueprint )
  } ),

  f.field( {
    key: 'row',
    as: 'one',
    label: false,
    layout: 'vertical',
    dependent: {
      key: 'type',
      pattern: '^row$',
    },
    form: cc.dialogue.designer.report.row( blueprint )
  } ),

  f.field( {
    key: 'form',
    as: 'one',
    label: false,
    layout: 'vertical',
    dependent: {
      key: 'type',
      pattern: '^form$',
    },
    form: cc.dialogue.designer.report.form( blueprint )
  } ),

  f.field( {
    key: 'template',
    as: 'markdown',
    label: false,
    layout: 'vertical',
    dependent: {
      key: 'type',
      pattern: '^template$',
    },
  } ),

]
