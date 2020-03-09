app.applications.blueprint.service_configurations.show = blueprint => controller => (a,x) => {

  let serviceConfiguration = blueprint.serviceConfigurations.find( controller.params.service_configuration_id )

  return [

    a.h5( `Service configuration ${ serviceConfiguration.id + 1 }` ),
    a.hr,
    a.h5( `${ serviceConfiguration.namespace } ${ serviceConfiguration.type }` ),

    a['div.clearfix']( a['div.btn-group.float-right']( [
      app.button( {
        label: app.icon( 'fa fa-edit', 'Edit' ),
        title: 'Edit',
        onclick: (e,el) => {
          controller.open( 'edit' )
        },
      } ),
      app.up( controller, 'Return to service configurations' ),
    ] ) ),

    app.report( {
      object: serviceConfiguration.object,
      report: (r) => [
        r.field( {
          key: 'variables',
          as: 'one',
          label: false,
          layout: 'vertical',
          report: (rr) => Object.keys( r.object.variables ).
            map( key =>
              rr.field( {
                key: key,
                label: key,
                value: r.object.variables[key],
              } )
          ),
        } ),
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
        title: 'Delete service configuration',
      } ),
    ) ),

  ]

}
