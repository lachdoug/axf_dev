app.applications.blueprint.schedules.new = blueprint => controller => (a,x) => {

  let schedule = blueprint.schedules.new()

  return app.applications.blueprint.schedules.form(
    controller,
    blueprint,
    schedule,
  )

}
