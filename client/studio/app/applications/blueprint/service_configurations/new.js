app.applications.blueprint.service_configurations.new = blueprint => controller => (a,x) => {

  let serviceConfiguration = blueprint.serviceConfigurations.new(
    controller.params.namespace,
    controller.params.type
  )

  return app.applications.blueprint.service_configurations.form(
    controller,
    blueprint,
    serviceConfiguration,
  )

}
