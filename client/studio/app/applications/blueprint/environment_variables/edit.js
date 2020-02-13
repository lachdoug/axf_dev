app.applications.blueprint.environment_variables.edit = blueprint => controller => (a,x) => {

  let environmentVariable = blueprint.environmentVariables.find( controller.params.environment_variable_id )

  return app.applications.blueprint.environment_variables.form(
    controller,
    blueprint,
    environmentVariable
  )

}
