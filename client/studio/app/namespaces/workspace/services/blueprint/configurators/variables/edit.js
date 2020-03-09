app.namespaces.workspace.services.blueprint.configurators.variables.edit = blueprint => controller => (a,x) => {

// debugger

  let configurator = blueprint.configurators.find( controller.params.configurator_id )
  let variable = configurator.variables.find( controller.params.variable_id )

  return app.namespaces.workspace.services.blueprint.configurators.variables.
              form( controller, blueprint, variable )

}
