app.namespaces.workspace.services.blueprint.configurators.variables.index = blueprint => controller => (a,x) => {

  let configurator = blueprint.configurators.find( controller.params.configurator_id )

  return [

    a.h5( `Configurator ${ configurator.id + 1 } variables` ),
    a.hr,

    a['div.clearfix']( a['div.btn-group.float-right']( [
      app.button( {
        label: app.icon( 'fa fa-plus', 'New variable' ),
        onclick: (e,el) => {
          controller.open( 'new' )
        },
        title: 'New variable',
      } ),
      app.close( controller, 'Return to configurator' ),
    ] ) ),


    configurator.variables.map( item => [ app.button( {
      label: `${ item.id + 1 }. ${ item.object.name }`,
      onclick: () => controller.open( `${ item.id }` ),
    } ) ] )

    // app.report( {
    //   object: configurator.object,
    //   report: (r) => [
    //     r.field( {
    //       key: 'variables',
    //       as: 'many',
    //       layout: 'vertical',
    //
    //       report: (rr) => app.button( {
    //         label: `${ rr.index + 1 }. ${ rr.object.name }`,
    //         onclick: () => controller.open( `${ rr.index }` ),
    //       } ),
    //     } ),
    //   ]
    // } ),

  ]

}
