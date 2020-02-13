app.applications.blueprint.actionators = blueprint => controller => (a,x) => [

  controller.routes( {
    '/?': app.applications.blueprint.actionators.index( blueprint ),
    '/new': app.applications.blueprint.actionators.new( blueprint ),
    '/:actionator_id': app.applications.blueprint.actionators.show( blueprint ),
    '/:actionator_id/edit': app.applications.blueprint.actionators.edit( blueprint ),
    '/:actionator_id/delete': app.applications.blueprint.actionators.delete( blueprint ),
    '/:actionator_id/variables/?': app.applications.blueprint.actionators.variables.index( blueprint ),
    '/:actionator_id/variables/new': app.applications.blueprint.actionators.variables.new( blueprint ),
    '/:actionator_id/variables/:variable_id': app.applications.blueprint.actionators.variables.show( blueprint ),
    '/:actionator_id/variables/:variable_id/edit': app.applications.blueprint.actionators.variables.edit( blueprint ),
    '/:actionator_id/variables/:variable_id/delete': app.applications.blueprint.actionators.variables.delete( blueprint ),
  } )

]
