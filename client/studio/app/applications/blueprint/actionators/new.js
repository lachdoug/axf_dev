app.applications.blueprint.actionators.new = blueprint => controller => (a,x) => {

  let actionator = blueprint.actionators.new()

  return app.applications.blueprint.actionators.form(
    controller,
    blueprint,
    actionator,
  )

}
