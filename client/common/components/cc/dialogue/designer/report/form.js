cc.dialogue.designer.report.form = blueprint => f => [

  cc.collapse( {
    label: 'Options',
    body: [
      f.field( {
        key: 'submit',
        label: 'Submit',
        as: 'one',
        form: cc.dialogue.designer.navigation.button( blueprint ),
      } ),
    ],
  } ),

  cc.collapse( {
    label: 'Form',
    body: [
      f.field( {
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
