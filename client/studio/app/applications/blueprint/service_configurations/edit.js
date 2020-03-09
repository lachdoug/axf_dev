app.applications.blueprint.service_configurations.edit = blueprint => controller => (a,x) => {

  let serviceConfiguration = blueprint.serviceConfigurations.find( controller.params.service_configuration_id )

  return app.applications.blueprint.service_configurations.form(
    controller,
    blueprint,
    serviceConfiguration
  )

}
