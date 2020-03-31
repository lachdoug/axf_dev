cc.dialogue.designer.markdown = f => f.fieldset( {
  layout: 'vertical',
  label: false,
  body: [
    f.field( {
      key: 'markdown',
      as: 'one',
      label: false,
      layout: 'vertical',
      form: ff => [
        cc.collapse( {
          label: 'Options',
          body: [
            ff.field( {
              key: 'get',
              layout: 'vertical',
            } ),
          ]
        } ),
        cc.collapse( {
          label: 'Template',
          body: [
            ff.field( {
              key: 'template',
              as: 'markdown',
              label: false,
              layout: 'vertical',
            } ),
          ]
        } ),
      ],
    } ),
  ],
  dependent: {
    key: 'type',
    pattern: '^markdown$',
  },
} ),
