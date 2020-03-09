app.namespaces.workspace.services.blueprint.configurators.edit = blueprint => controller => (a,x) => {

  let configurator = blueprint.configurators.find( controller.params.configurator_id )

  return app.namespaces.workspace.services.blueprint.configurators.form(
    controller,
    blueprint,
    configurator
  )

}
