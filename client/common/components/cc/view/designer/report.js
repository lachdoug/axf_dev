cc.view.designer.report = (f) => f.field( {
    key: 'report',
    as: 'one',
    label: false,
    layout: 'vertical',
    dependent: {
      target: 'type',
      pattern: '^report$',
    },
    form: (ff) => [

      cc.collapse( {
        label: 'Options',
        body: [
          ff.field( { key: 'scope' } ),
          ff.field( {
            key: 'back',
            as: 'one',
            form: (fff) => [
              fff.field( { key: 'hide', as: 'check' } ),
              fff.field( { key: 'label' } ),
            ]
          } ),
        ],
      } ),


      cc.collapse( {
        label: 'Report',
        body: [
          ff.field( {
            key: 'components',
            label: false,
            as: 'many',
            item: 'report component',
            form: cc.view.designer.report.component,
            layout: 'vertical',
          } ),
        ],
      } ),

    ]
  } )
