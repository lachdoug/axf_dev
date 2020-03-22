app.namespaces.workspace.services.blueprint.consumer_params.index = blueprint => controller => (a,x) => [

  a.h5( 'Environment variables' ),
  a.hr,

  a['div.clearfix']( a['div.btn-group.float-right']( [
    app.button( {
      label: app.icon( 'fa fa-plus', 'New consumer param' ),
      onclick: (e,el) => {
        controller.open( 'new' )
      },
      title: 'New consumer param',
    } ),
    app.close( controller, 'Return to blueprint' ),
  ] ) ),

  blueprint.consumerParams.map(
    ( item, i ) => a.div( app.button( {
      label: `${ i + 1 }. ${ item.object.name }`,
      onclick: () => controller.open( `${i}` ),
    } ) )
  ),

]
