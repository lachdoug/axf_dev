app.namespaces.workspace.services.blueprint.configurators.show = blueprint => controller => (a,x) => {

  let configurator = blueprint.configurators.find( controller.params.configurator_id )

  return [

    a.h5( `Configurator ${ configurator.id + 1 }` ),
    a.hr,

    a['div.clearfix']( a['div.btn-group.float-right']( [
      app.button( {
        label: app.icon( 'fa fa-edit', 'Edit' ),
        title: 'Edit',
        onclick: (e,el) => {
          controller.open( 'edit' )
        },
      } ),
      app.up( controller, 'Return to configurators' ),
    ] ) ),

    app.report( {
      object: configurator.object,
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
          key: 'enable_logging',
          as: 'boolean',
          compact: true,
        } ),
        r.field( {
          key: 'no_save',
          as: 'boolean',
          compact: true,
        } ),
        r.field( {
          key: 'set_script',
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
        r.field( {
          key: 'set_script_sudo',
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
        r.field( {
          key: 'read_script',
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
        r.field( {
          key: 'read_script_sudo',
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
        x.list( configurator.variables.output() ),

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
        title: 'Delete configurator',
      } ),
    ) ),

  ]

}
