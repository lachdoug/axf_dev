cc.dialogue.designer.navigation.button = blueprint => f => [

  f.row( {
    columns: [

      f.field( {
        key: 'icon',
        as: 'select',
        placeholder: 'Default',
        selections: {
          'none': 'None',
          'check': 'Check',
          'times': 'Times',
          'plus': 'Plus',
          'minus': 'Minus',
          'caret-right': 'Caret',
          'arrow-right': 'Right arrow',
          'arrow-left': 'Left arrow',
          'arrow-up': 'Right up',
          'arrow-down': 'Right down',
          'edit': 'Edit',
          'trash': 'Trash',
          'search': 'Search',
        },
      } ),

      f.field( {
        key: 'style',
        as: 'select',
        placeholder: 'Default',
        selections: {
          none: 'None',
          primary: 'Primary',
          secondary: 'Secondary',
          warning: 'Warning',
          danger: 'Danger',
        },
      } ),


    ]
  } ),

  f.field( {
    key: 'label',
    as: 'one',
    form: (ff) => [
      ff.field( {
        key: 'display',
        layout: 'vertical',
        label: false,
        as: 'select',
        placeholder: 'Default',
        selections: {
          none: 'None',
          custom: 'Custom',
        }
      } ),
      ff.field( {
        key: 'custom',
        layout: 'vertical',
        label: false,
        dependent: {
          key: 'display',
          value: 'custom'
        }
      } ),
    ],
  } ),

  f.field( {
    key: 'dialogue',
    as: 'combobox',
    placeholder: 'None',
    selections: blueprint.dialogues.map( control => control.object.name ),
  } ),

  // f.row( {
  //   columns: [
  //   ]
  // } ),

]
