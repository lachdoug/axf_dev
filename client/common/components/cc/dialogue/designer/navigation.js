cc.dialogue.designer.navigation = blueprint => f => f.fieldset( {
  layout: 'vertical',
  label: false,
  body: [
    f.field( {
      key: 'navigation',
      as: 'one',
      label: false,
      layout: 'vertical',
      form: ff => [

        cc.collapse( {
          label: 'Components',
          body: [
            ff.field( {
              key: 'components',
              item: 'navigation component',
              label: false,
              layout: 'vertical',
              as: 'many',
              form: fff => [
                fff.field( {
                  key: 'type',
                  as: 'select',
                  layout: 'vertical',
                  label: false,
                  selections: {
                    button: 'Button',
                    menu: 'Menu',
                  },
                } ),
                fff.field( {
                  key: 'button',
                  as: 'one',
                  layout: 'vertical',
                  label: false,
                  form: ffff => [
                    cc.dialogue.designer.navigation.button( blueprint )( ffff ),
                    ffff.field( {
                      key: 'parameters',
                      item: 'parameter',
                      collection: true,
                      // as: 'many',
                      // form: fffff => fffff.field( {
                      //   key
                      // } ),
                    } )
                  ]
                } ),
              ],
            } ),
          ],
        } ),

      ],
    } ),
  ],
  dependent: {
    key: 'type',
    pattern: '^navigation$',
  },
} ),
