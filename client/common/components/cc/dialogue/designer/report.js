cc.dialogue.designer.report = blueprint => f => f.field( {
    key: 'report',
    as: 'one',
    label: false,
    layout: 'vertical',
    dependent: {
      key: 'type',
      pattern: '^report$',
    },
    form: (ff) => [

      // cc.collapse( {
      //   label: 'Options',
      //   body: [
      //     ff.field( {
      //       key: 'back',
      //       as: 'one',
      //       form: (fff) => fff.row( { columns: [
      //         fff.field( { key: 'hide', as: 'checkbox', layout: 'vertical', label: false, checkbox: { label: 'Hide button' } } ),
      //         fff.field( { key: 'label', dependent: { key: 'hide', pattern: '^$' } } ),
      //       ] } ),
      //     } ),
      //     ff.field( {
      //       key: 'close',
      //       as: 'one',
      //       form: (fff) => fff.row( { columns: [
      //         fff.field( { key: 'hide', as: 'checkbox', layout: 'vertical', label: false, checkbox: { label: 'Hide button' } } ),
      //         fff.field( { key: 'label', dependent: { key: 'hide', pattern: '^$' } } ),
      //       ] } ),
      //     } ),
      //   ],
      // } ),

      cc.collapse( {
        label: 'Components',
        body: [
          ff.field( {
            key: 'components',
            label: false,
            as: 'many',
            item: 'report component',
            form: cc.dialogue.designer.report.component( blueprint ),
            layout: 'vertical',
          } ),
        ],
      } ),

    ]
  } )
