app.applications.blueprint.environment_variables.new = blueprint => controller => (a,x) => {

  let environmentVariable = blueprint.environmentVariables.new()

  return app.applications.blueprint.environment_variables.form(
    controller,
    blueprint,
    environmentVariable,
  )

}
