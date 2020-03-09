app.namespaces.workspace.services.blueprint.configurators.new = blueprint => controller => (a,x) => {

  let configurator = blueprint.configurators.new()

  return app.namespaces.workspace.services.blueprint.configurators.form(
    controller,
    blueprint,
    configurator,
  )

}
