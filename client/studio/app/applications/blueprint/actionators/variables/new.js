app.applications.blueprint.actionators.variables.new = blueprint => controller => (a,x) => {

  let actionator = blueprint.actionators.find( controller.params.actionator_id )
  let variable = actionator.variables.new()

  return app.applications.blueprint.actionators.variables.
              form( controller, blueprint, variable )

}
