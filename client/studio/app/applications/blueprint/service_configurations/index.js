app.applications.blueprint.service_configurations.index = blueprint => controller => (a,x) => [

  a.h5( 'Service configurations' ),
  a.hr,

  a['div.clearfix']( a['div.btn-group.float-right']( [
    app.button( {
      label: app.icon( 'fa fa-plus', 'New service configurations' ),
      onclick: (e,el) => {
        controller.open( 'new' )
      },
      title: 'New service configurations',
    } ),
  ] ) ),

  blueprint.serviceConfigurations.map(
    ( item, i ) => [ app.button( {
      label: `${ i + 1 }. ${ item.object.label }`,
      onclick: () => controller.open( `${i}` ),
    } ) ]
  ),

]
