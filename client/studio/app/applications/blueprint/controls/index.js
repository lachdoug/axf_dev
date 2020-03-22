app.applications.blueprint.controls.index = blueprint => controller => (a,x) => [

  a.h5( 'Controls' ),
  a.hr,

  a['div.clearfix']( a['div.btn-group.float-right']( [
    app.button( {
      label: app.icon( 'fa fa-plus', 'New control' ),
      onclick: (e,el) => {
        controller.open( 'new' )
      },
      title: 'New control',
    } ),
    app.close( controller, 'Return to blueprint' ),
  ] ) ),

  blueprint.controls.map(
    ( item, i ) => a.div( app.button( {
      label: `${ i + 1 }. ${ item.object.name }`,
      onclick: () => controller.open( `${i}` ),
    } ) )
  ),

]
