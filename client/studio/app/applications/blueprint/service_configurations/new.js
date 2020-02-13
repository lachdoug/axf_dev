app.applications.blueprint.service_configurations.new = blueprint => controller => (a,x) => {

  let serviceConfiguration = blueprint.serviceConfigurations.new()

  return app.applications.blueprint.service_configurations.form(
    controller,
    blueprint,
    serviceConfiguration,
  )

}
