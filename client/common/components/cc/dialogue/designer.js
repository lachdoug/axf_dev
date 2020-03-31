cc.dialogue.designer = blueprint => f => (a,x) => [

  f.field( {
    key: 'components',
    label: false,
    as: 'many',
    item: 'dialogue component',
    form: cc.dialogue.designer.component( blueprint ),
    layout: 'vertical',
  } ),

]
