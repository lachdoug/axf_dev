app.applications.blueprint.actionators.variables.edit = blueprint => controller => (a,x) => {

// debugger

  let actionator = blueprint.actionators.find( controller.params.actionator_id )
  let variable = actionator.variables.find( controller.params.variable_id )

  return app.applications.blueprint.actionators.variables.
              form( controller, blueprint, variable )

}
