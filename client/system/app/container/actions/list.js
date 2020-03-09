app.container.actions.list = ( controller, actions ) => (a,x) => [
  actions.length ?
  actions.map( action => a.div( [
    app.btn(
      app.icon( 'fa fa-caret-right', ( action.label || action.name ) ),
      () => controller.open( 'perform', { action_name: action.name } ),
    ),
  ] ) ) :
  a.i( 'None' )
]
