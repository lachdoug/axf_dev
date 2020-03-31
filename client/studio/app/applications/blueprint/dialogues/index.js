app.applications.blueprint.dialogues.index = blueprint => controller => (a,x) => [

  a.h5( 'Dialogues' ),
  a.hr,

  a['div.clearfix']( a['div.btn-group.float-right']( [
    app.button( {
      label: app.icon( 'fa fa-plus', 'New dialogue' ),
      onclick: (e,el) => {
        controller.open( 'new' )
      },
      title: 'New dialogue',
    } ),
    app.close( controller, 'Return to blueprint' ),
  ] ) ),

  blueprint.dialogues.map(
    ( item, i ) => a.div( app.button( {
      label: `${ i + 1 }. ${ item.object.name }`,
      onclick: () => controller.open( `${i}` ),
    } ) )
  ),

]
