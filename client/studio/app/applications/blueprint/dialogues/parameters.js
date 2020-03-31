app.applications.blueprint.dialogues.parameters = blueprint => controller =>
(a,x) => {

  let dialogue = blueprint.dialogues.find( controller.params.dialogue_id )

  return [

    a.h5( `Dialogue ${ dialogue.id + 1 } parameters` ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      dialogue.parameters,
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
              key: 'method',
              as: 'select',
              placeholder: 'None',
              selections: {
                action: 'Action',
                resolve: 'Resolve',
                // parse: 'Parse',
              }
            } ),
            ff.field( {
              key: 'action',
              as: 'select',
              label: false,
              placeholder: 'Select action',
              selections: blueprint.actionators.map(
                actionator => actionator.object.name
              ),
              required: true,
              dependent: {
                key: 'method',
                value: 'action',
              }
            } ),
            ff.field( {
              key: 'resolve',
              as: 'code',
              label: false,
              placeholder: 'Template string',
              required: true,
              dependent: {
                key: 'method',
                value: 'resolve',
              }
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
