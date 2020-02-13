app.applications.blueprint.schedules = blueprint => controller => (a,x) => [

  controller.routes( {
    '/?': app.applications.blueprint.schedules.index( blueprint ),
    '/new': app.applications.blueprint.schedules.new( blueprint ),
    '/:schedule_id': app.applications.blueprint.schedules.show( blueprint ),
    '/:schedule_id/edit': app.applications.blueprint.schedules.edit( blueprint ),
    '/:schedule_id/delete': app.applications.blueprint.schedules.delete( blueprint ),
    '/:schedule_id/params/?': app.applications.blueprint.schedules.params( blueprint ),
  } )

]
