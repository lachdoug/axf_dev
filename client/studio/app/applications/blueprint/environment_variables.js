app.applications.blueprint.environment_variables = blueprint => controller => (a,x) => [

  controller.routes( {
    '/?': app.applications.blueprint.environment_variables.index( blueprint ),
    '/new': app.applications.blueprint.environment_variables.new( blueprint ),
    '/:environment_variable_id': app.applications.blueprint.environment_variables.show( blueprint ),
    '/:environment_variable_id/edit': app.applications.blueprint.environment_variables.edit( blueprint ),
    '/:environment_variable_id/delete': app.applications.blueprint.environment_variables.delete( blueprint ),
  } )

]
