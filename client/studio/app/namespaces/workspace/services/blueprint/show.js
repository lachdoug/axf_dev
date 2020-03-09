app.namespaces.workspace.services.blueprint.show = blueprint => controller => (a,x) => [

  a['div.clearfix']( [
    a['div.btn-group.float-right']( [
      app.up( controller, 'Return to service' ),
    ] ),
  ] ),

  a['div.row']( [
    a['div.col-sm-2']( [
      app.namespaces.workspace.services.blueprint.nav( blueprint, controller )
    ] ),
    a['div.col-sm-10']( [
      x.list( blueprint.output )
    ] ),
  ] )



]
