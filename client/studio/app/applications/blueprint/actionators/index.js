app.applications.blueprint.actionators.index = blueprint => controller => (a,x) => [

  a.h5( 'Actionators' ),
  a.hr,

  a['div.clearfix']( a['div.btn-group.float-right']( [
    app.button( {
      label: app.icon( 'fa fa-plus', 'New actionator' ),
      onclick: (e,el) => {
        controller.open( 'new' )
      },
      title: 'New actionator',
    } ),
    app.close( controller, 'Return to blueprint' ),
  ] ) ),

  blueprint.actionators.map(
    ( item, i ) => [ app.button( {
      label: `${ i + 1 }. ${ item.object.name }`,
      onclick: () => controller.open( `${i}` ),
    } ) ]
  ),

]
