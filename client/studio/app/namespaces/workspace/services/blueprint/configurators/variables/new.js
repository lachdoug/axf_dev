app.namespaces.workspace.services.blueprint.configurators.variables.new = blueprint => controller => (a,x) => {

  let configurator = blueprint.configurators.find( controller.params.configurator_id )
  let variable = configurator.variables.new()

  return app.namespaces.workspace.services.blueprint.configurators.variables.
              form( controller, blueprint, variable )

}
