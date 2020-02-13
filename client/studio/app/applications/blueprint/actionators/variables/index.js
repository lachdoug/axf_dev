app.applications.blueprint.actionators.variables.index = blueprint => controller => (a,x) => {

  let actionator = blueprint.actionators.find( controller.params.actionator_id )

  return [

    a.h5( `Actionator ${ actionator.id + 1 } variables` ),
    a.hr,

    a['div.clearfix']( a['div.btn-group.float-right']( [
      app.button( {
        label: app.icon( 'fa fa-plus', 'New variable' ),
        onclick: (e,el) => {
          controller.open( 'new' )
        },
        title: 'New variable',
      } ),
    ] ) ),


    actionator.variables.map( item => [ app.button( {
      label: `${ item.id + 1 }. ${ item.object.name }`,
      onclick: () => controller.open( `${ item.id }` ),
    } ) ] )

    // app.report( {
    //   object: actionator.object,
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
