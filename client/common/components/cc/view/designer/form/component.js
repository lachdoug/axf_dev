cc.view.designer.form.component = (f) => [

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
    form: cc.view.designer.form.field
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
    form: cc.view.designer.form.fieldset
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
    form: cc.view.designer.form.row
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
