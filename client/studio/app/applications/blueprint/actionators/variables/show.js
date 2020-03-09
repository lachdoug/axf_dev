app.applications.blueprint.actionators.variables.show = blueprint => controller => (a,x) => {

  let actionator = blueprint.actionators.find( controller.params.actionator_id )
  let variable = actionator.variables.find( controller.params.variable_id )

  return [

    a.h5( `Actionator ${ actionator.id + 1 } variable ${ variable.id + 1 }` ),
    a.hr,

    a['div.clearfix']( a['div.btn-group.float-right']( [
      app.button( {
        label: app.icon( 'fa fa-edit', 'Edit' ),
        title: 'Edit',
        onclick: (e,el) => {
          controller.open( 'edit' )
        },
      } ),
      app.up( controller, 'Return to variables' ),
    ] ) ),

    app.report( {
      object: variable.object,
      report: (r) => [
        r.field( {
          key: 'name',
        } ),
        r.field( {
          key: 'value',
        } ),
        r.field( {
          key: 'mandatory',
          as: 'boolean',
        } ),
        a.hr,
        app.reportEnginesV1Input(r),
      ]
    } ),

    a.hr,
    a['div.clearfix']( a['div.btn-group.float-right'](
      app.button( {
        label: app.icon( 'fa fa-trash', 'Delete' ),
        class: 'btn btn-outline-danger app-btn',
        onclick: (e,el) => {
          controller.open( 'delete' )
        },
        title: 'Delete actionator variable',
      } ),
    ) ),


  ]

}
