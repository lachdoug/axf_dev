app.applications.blueprint.controls.edit = blueprint => controller => (a,x) => {

  let control = blueprint.controls.find( controller.params.control_id )

  return app.applications.blueprint.controls.form(
    controller,
    blueprint,
    control
  )

}
