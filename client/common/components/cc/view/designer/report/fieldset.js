cc.view.designer.report.fieldset = (f) => [

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
        as: 'check',
        checked: 'vertical',
        check: { label: 'Vertical' },
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
        form: cc.view.designer.report.component,
        layout: 'vertical',
        addable: true,
        removable: true,
        sortable: true,
      } ),

    ],
  } ),

]
