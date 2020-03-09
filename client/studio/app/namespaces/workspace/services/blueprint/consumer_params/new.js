app.namespaces.workspace.services.blueprint.consumer_params.new = blueprint => controller => (a,x) => {

  let consumerParam = blueprint.consumerParams.new()

  return app.namespaces.workspace.services.blueprint.consumer_params.form(
    controller,
    blueprint,
    consumerParam,
  )

}
