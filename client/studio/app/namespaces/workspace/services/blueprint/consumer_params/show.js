app.namespaces.workspace.services.blueprint.consumer_params.show = blueprint => controller => (a,x) => {

  let consumerParam = blueprint.consumerParams.find( controller.params.consumer_param_id )

  return [

    a.h5( `Environment variable ${ consumerParam.id + 1 }` ),
    a.hr,

    a['div.clearfix']( a['div.btn-group.float-right']( [
      app.button( {
        label: app.icon( 'fa fa-edit', 'Edit' ),
        title: 'Edit',
        onclick: (e,el) => {
          controller.open( 'edit' )
        },
      } ),
      app.up( controller, 'Return to consumer params' ),
    ] ) ),

    app.report( {
      object: consumerParam.object,
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
        class: 'btn btn-outline-danger app-btn',
        onclick: (e,el) => {
          controller.open( 'delete' )
        },
        title: 'Delete consumer param',
      } ),
    ) ),


  ]

}
