app.applications.blueprint.environment_variables.show = blueprint => controller => (a,x) => {

  let environmentVariable = blueprint.environmentVariables.find( controller.params.environment_variable_id )

  return [

    a.h5( `Environment variable ${ environmentVariable.id + 1 }` ),
    a.hr,

    a['div.clearfix']( a['div.btn-group.float-right']( [
      app.button( {
        label: app.icon( 'fa fa-edit', 'Edit' ),
        title: 'Edit',
        onclick: (e,el) => {
          controller.open( 'edit' )
        },
      } ),
      app.close( controller, 'Return to environment variables' ),
    ] ) ),

    app.report( {
      object: environmentVariable.object,
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
        r.field( {
          key: 'immutable',
          as: 'boolean',
        } ),
        r.field( {
          key: 'ask_at_build_time',
          as: 'boolean',
        } ),
        r.field( {
          key: 'build_time_only',
          as: 'boolean',
        } ),

        a.hr,
        app.reportEnginesV1Input(r),

      ],

    } ),

    a.hr,
    a['div.clearfix']( a['div.btn-group.float-right'](
      app.button( {
        label: app.icon( 'fa fa-trash', 'Delete' ),
        class: 'btn app-btn-danger',
        onclick: (e,el) => {
          controller.open( 'delete' )
        },
        title: 'Delete environment variable',
      } ),
    ) ),


  ]

}
