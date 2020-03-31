app.applications.blueprint.dialogues.
form = ( controller, blueprint, dialogue ) => (a,x) => {

  let heading = dialogue.isNew ?
    'New dialogue':
    `Edit dialogue ${ dialogue.id + 1 }`

  return [

    a.h5( heading ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      dialogue,
      f => f.field( {
        key: 'name',
        required: true,
        placeholder: 'Name',
        pattern: '^[a-z0-9_]+$',
        invalid: 'Permitted characters are lowercase letters, digits and underscores.',
        selections: {
          'one': 'One'
        }
      } ),

    ),

  ]

}
