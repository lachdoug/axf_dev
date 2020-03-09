app.namespaces.workspace.services.blueprint.configurators = blueprint => controller => (a,x) => [

  controller.routes( {
    '/?': app.namespaces.workspace.services.blueprint.configurators.index( blueprint ),
    '/new': app.namespaces.workspace.services.blueprint.configurators.new( blueprint ),
    '/:configurator_id': app.namespaces.workspace.services.blueprint.configurators.show( blueprint ),
    '/:configurator_id/edit': app.namespaces.workspace.services.blueprint.configurators.edit( blueprint ),
    '/:configurator_id/delete': app.namespaces.workspace.services.blueprint.configurators.delete( blueprint ),
    '/:configurator_id/variables/?': app.namespaces.workspace.services.blueprint.configurators.variables.index( blueprint ),
    '/:configurator_id/variables/new': app.namespaces.workspace.services.blueprint.configurators.variables.new( blueprint ),
    '/:configurator_id/variables/:variable_id': app.namespaces.workspace.services.blueprint.configurators.variables.show( blueprint ),
    '/:configurator_id/variables/:variable_id/edit': app.namespaces.workspace.services.blueprint.configurators.variables.edit( blueprint ),
    '/:configurator_id/variables/:variable_id/delete': app.namespaces.workspace.services.blueprint.configurators.variables.delete( blueprint ),
  } )

]
