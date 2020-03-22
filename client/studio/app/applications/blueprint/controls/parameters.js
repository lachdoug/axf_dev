app.applications.blueprint.controls.parameters = blueprint => controller =>
(a,x) => {

  let control = blueprint.controls.find( controller.params.control_id )

  return [

    a.h5( `Control ${ control.id + 1 } parameters` ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      control.parameters,
      f => [
        f.field( {
          key: 'parameters',
          as: 'many',
          layout: 'vertical',
          form: ff => [
            ff.field( {
              key: 'get',
            } ),
            ff.field( {
              key: 'action',
              as: 'select',
              placeholder: 'None',
              selections: blueprint.actionators.map(
                actionator => actionator.object.name
              ),
            } ),
            ff.field( {
              key: 'set',
            } ),
          ],
        } ),
      ]
    ),

  ]

}
