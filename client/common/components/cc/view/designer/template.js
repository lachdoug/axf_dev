cc.view.designer.template = (f) => f.fieldset( {
  layout: 'vertical',
  label: false,
  body: cc.collapse( {
    label: 'Template',
    body: [
      f.field( {
        key: 'template',
        as: 'markdown',
        label: false,
        layout: 'vertical',
      } ),
    ]
  } ),
  dependent: {
    target: 'type',
    pattern: '^template$',
  },
} ),
