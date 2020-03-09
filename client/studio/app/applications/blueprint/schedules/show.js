app.applications.blueprint.schedules.show = blueprint => controller => (a,x) => {

  let schedule = blueprint.schedules.find( controller.params.schedule_id )

  return [

    a.h5( `Schedule ${ schedule.id + 1 }` ),
    a.hr,

    a['div.clearfix']( a['div.btn-group.float-right']( [
      app.button( {
        label: app.icon( 'fa fa-edit', 'Edit' ),
        title: 'Edit',
        onclick: (e,el) => {
          controller.open( 'edit' )
        },
      } ),
      app.up( controller, 'Return to schedules' ),
    ] ) ),

    app.report( {
      object: schedule.object,
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
              // selections: blueprint.schedules.actionators,
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
          x.list( schedule.params.output() ),
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
        title: 'Delete schedule',
      } ),
    ) ),


  ]

}
