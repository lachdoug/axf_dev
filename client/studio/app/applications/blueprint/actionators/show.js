app.applications.blueprint.actionators.show = blueprint => controller => (a,x) => {

  let actionator = blueprint.actionators.find( controller.params.actionator_id )

  return [

    a.h5( `Actionator ${ actionator.id + 1 }` ),
    a.hr,

    a['div.clearfix']( a['div.btn-group.float-right']( [
      app.button( {
        label: app.icon( 'fa fa-edit', 'Edit' ),
        title: 'Edit',
        onclick: (e,el) => {
          controller.open( 'edit' )
        },
      } ),
      app.close( controller, 'Return to actionators' ),
    ] ) ),

    app.report( {
      object: actionator.object,
      report: (r) => [
        r.field( {
          key: 'name',
        } ),
        r.field( {
          key: 'label',
          compact: true,
        } ),
        r.field( {
          key: 'description',
          as: 'markdown',
          compact: true,
        } ),
        r.field( {
          key: 'return_type',
          // as: 'select',
          placeholder: ' ',
          selections: app.selections.actionator_return_types,
          compact: true,
        } ),
        r.field( {
          key: 'return_file_name',
          compact: true,
        } ),
        r.field( {
          key: 'timeout',
          compact: true,
        } ),
        r.field( {
          key: 'enable_logging',
          as: 'boolean',
          compact: true,
        } ),
        r.field( {
          key: 'background',
          as: 'boolean',
          compact: true,
        } ),
        r.field( {
          key: 'script',
          as: 'one',
          report: (rr) => [
            rr.field( {
              key: 'content',
              as: 'code',
              label: false,
              layout: 'vertical',
              code: {
                mode: rr.object.language,
              }
            } )
          ]
        } ),
        a.hr,
        app.button( {
          label: app.icon( 'fa fa-caret-right', 'Variables' ),
          title: 'List variables',
          onclick: (e,el) => {
            controller.open( 'variables' )
          },
        } ),
        x.output( actionator.variables.output() ),

      ]
    } ),

    a.hr,
    a['div.clearfix']( a['div.btn-group.float-right'](
      app.button( {
        label: app.icon( 'fa fa-trash', 'Delete' ),
        class: 'btn app-btn-danger',
        onclick: (e,el) => {
          controller.open( 'delete' )
        },
        title: 'Delete actionator',
      } ),
    ) ),

  ]

}
