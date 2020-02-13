app.applications.blueprint.service_configurations.show = blueprint => controller => (a,x) => {

  let service_configuration = blueprint.serviceConfigurations.find( controller.params.service_configuration_id )

  return [

    a.h5( `Service configuration ${ serviceConfiguration.id + 1 }` ),
    a.hr,

    app.button( {
      label: app.icon( 'fa fa-edit', 'Edit' ),
      title: 'Edit',
      onclick: (e,el) => {
        controller.open( 'edit' )
      },
    } ),

    app.report( {
      object: serviceConfiguration.object,
      report: (r) => [
        r.field( {
          key: 'label',
          required: true,
        } ),
        r.field( {
          key: 'timespec',
          as: 'one',
          report: (rr) => [
            rr.field( {
              key: 'minute',
            } ),
            rr.field( {
              key: 'hour',
            } ),
            rr.field( {
              key: 'day_of_month',
            } ),
            rr.field( {
              key: 'month',
            } ),
            rr.field( {
              key: 'day_of_week',
            } ),
          ]
        } ),
        r.field( {
          key: 'instruction',
          // as: 'select',
          // placeholder: ' ',
          // selections: {
          //   start: 'Start',
          //   stop: 'Stop',
          //   pause: 'Pause',
          //   unpause: 'Unpause',
          //   restart: 'Restart',
          //   action: 'Action',
          // }
        } ),
        r.field( {
          key: 'actionator',
          as: 'one',
          report: (rr) => [
            rr.field( {
              key: 'name',
              // as: 'select',
              layout: 'vertical',
              label: false,
              // placeholder: 'Select actionator',
              // selections: blueprint.service_configurations.actionators,
            } ),
          ],
          dependent: {
            key: 'instruction',
            value: 'action'
          }
        } ),

        r.object.instruction === 'action' ? [
          a.hr,
          app.button( {
            label: app.icon( 'fa fa-caret-right', 'Params' ),
            title: 'List params',
            onclick: (e,el) => {
              controller.open( 'params' )
            },
          } ),
          x.list( serviceConfiguration.variables.output() ),
        ] : null,

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
        title: 'Delete service_configuration',
      } ),
    ) ),


  ]

}
