cc.dialogue.designer.report.fieldset = blueprint => f => [

  cc.collapse( {
    label: 'Options',
    body: [

      f.field( {
        key: 'label',
      } ),

      f.field( {
        key: 'legend',
      } ),

      f.field( {
        key: 'layout',
        as: 'checkbox',
        checked: 'vertical',
        checkbox: { label: 'Vertical' },
      } ),

      f.field( {
        key: 'dependent',
        as: 'one',
        form: (ff) => ff.row( { columns: [
          ff.field( {
            key: 'target',
          } ),
          ff.field( {
            key: 'pattern',
          } ),
        ] } ),
      } ),

    ],
  } ),

  cc.collapse( {
    label: 'Body',
    body: [

      f.field( {
        key: 'body',
        as: 'many',
        label: false,
        item: 'fieldset component',
        form: cc.dialogue.designer.report.component( blueprint ),
        layout: 'vertical',
      } ),

    ],
  } ),

]
