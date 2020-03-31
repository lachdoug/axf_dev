cc.dialogue.designer.form = blueprint => f => f.field( {
  key: 'form',
  as: 'one',
  label: false,
  layout: 'vertical',
  dependent: {
    key: 'type',
    pattern: '^form$',
  },
  form: (ff) => [

    cc.collapse( {
      label: 'Options',
      body: [
        ff.field( {
          key: 'cancel',
          label: 'Cancel',
          as: 'one',
          layout: 'vertical',
          form: cc.dialogue.designer.navigation.button( blueprint ),
        } ),
        ff.field( {
          key: 'submit',
          label: 'Submit',
          as: 'one',
          layout: 'vertical',
          form: cc.dialogue.designer.navigation.button( blueprint ),
        } ),
      ],
    } ),

    cc.collapse( {
      label: 'Components',
      body: [
        ff.field( {
          key: 'components',
          label: false,
          as: 'many',
          item: 'form component',
          form: cc.dialogue.designer.form.component,
          layout: 'vertical',
        } ),
      ],
    } ),

  ]
} )
