app.applications.blueprint.controls.
form = ( controller, blueprint, control ) => (a,x) => {

  let heading = control.isNew ?
    'New control':
    `Edit control ${ control.id + 1 }`

  return [

    a.h5( heading ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      control,
      f => f.field( {
        key: 'name',
        required: true,
        placeholder: 'Name',
        pattern: '^[a-z0-9_]+$',
        invalid: 'Permitted characters are lowercase letters, digits and underscores.',
      } ),

    ),

  ]

}
