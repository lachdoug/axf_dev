app.applications.blueprint.controls.new = blueprint => controller => (a,x) => {

  let control = blueprint.controls.new()

  return app.applications.blueprint.controls.form(
    controller,
    blueprint,
    control,
  )

}
