app.applications.blueprint.dialogues.tests = blueprint => controller =>
(a,x) => {

  let dialogue = blueprint.dialogues.find( controller.params.dialogue_id )

  return [

    a.h5( `dialogue ${ dialogue.id + 1 } tests` ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      dialogue.tests,
      (f) => f.field( {
        key: 'tests',
        as: 'many',
        layout: 'vertical',
        form: f => [
          f.field( {
            key: 'label',
            required: true,
          } ),
          f.field( {
            key: 'parameters',
            as: 'json',
            value: {},
          } ),
        ],
      } ),
      data => {
        for ( let i in data.tests ) {
          data.tests[i].parameters = JSON.parse( data.tests[i].parameters )
        }
        return data
      },

    ),

  ]

}
