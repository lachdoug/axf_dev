cc.dialogue.designer.report.row = blueprint => f => (a,x) => [

  cc.collapse( {
    label: 'Columns',
    body: [

      f.field( {
        key: 'columns',
        as: 'many',
        item: 'column',
        form: cc.dialogue.designer.report.component( blueprint ),
        label: false,
        layout: 'vertical',
      } ),

    ],
  } ),

]
