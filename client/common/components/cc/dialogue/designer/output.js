cc.dialogue.designer.output = f => f.fieldset( {
  layout: 'vertical',
  label: false,
  body: [
    f.field( {
      key: 'output',
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
      ],
    } ),
  ],
  dependent: {
    key: 'type',
    pattern: '^output$',
  },
} )
