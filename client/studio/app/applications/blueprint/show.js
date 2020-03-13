app.applications.blueprint.show = blueprint => controller => (a,x) => [

  a['div.clearfix']( [
    a['div.btn-group.float-right']( [
      app.close( controller, 'Return to application' ),
    ] ),
  ] ),

  a['div.row']( [
    a['div.col-sm-2']( [
      app.applications.blueprint.nav( blueprint, controller )
    ] ),
    a['div.col-sm-10']( [
      x.list( blueprint.output )
    ] ),
  ] )



]
