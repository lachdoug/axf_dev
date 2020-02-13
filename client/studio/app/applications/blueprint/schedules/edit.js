app.applications.blueprint.schedules.edit = blueprint => controller => (a,x) => {

  let schedule = blueprint.schedules.find( controller.params.schedule_id )

  return app.applications.blueprint.schedules.form(
    controller,
    blueprint,
    schedule
  )

}
