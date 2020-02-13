app.applications.blueprint.actionators.edit = blueprint => controller => (a,x) => {

  let actionator = blueprint.actionators.find( controller.params.actionator_id )

  return app.applications.blueprint.actionators.form(
    controller,
    blueprint,
    actionator
  )

}
