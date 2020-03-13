app.applications.blueprint.environment_variables.index = blueprint => controller => (a,x) => [

  a.h5( 'Environment variables' ),
  a.hr,

  a['div.clearfix']( a['div.btn-group.float-right']( [
    app.button( {
      label: app.icon( 'fa fa-plus', 'New environment variable' ),
      onclick: (e,el) => {
        controller.open( 'new' )
      },
      title: 'New environment variable',
    } ),
    app.close( controller, 'Return to blueprint' ),
  ] ) ),

  blueprint.environmentVariables.map(
    ( item, i ) => [ app.button( {
      label: `${ i + 1 }. ${ item.object.name }`,
      onclick: () => controller.open( `${i}` ),
    } ) ]
  ),

]
