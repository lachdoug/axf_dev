app.applications.blueprint.controls.tests = blueprint => controller =>
(a,x) => {

  let control = blueprint.controls.find( controller.params.control_id )

  return [

    a.h5( `Control ${ control.id + 1 } tests` ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      control.tests,
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
