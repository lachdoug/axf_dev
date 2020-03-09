app.namespaces.workspace.services.blueprint.consumer_params.edit = blueprint => controller => (a,x) => {

  let consumerParam = blueprint.consumerParams.find( controller.params.consumer_param_id )

  return app.namespaces.workspace.services.blueprint.consumer_params.form(
    controller,
    blueprint,
    consumerParam
  )

}
