app.templateDesigner = (f) => f.fieldset( {
  layout: 'vertical',
  label: false,
  body: app.collapse( {
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
