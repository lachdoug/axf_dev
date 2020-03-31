app.applications.blueprint.dialogues.new = blueprint => controller => (a,x) => {

  let dialogue = blueprint.dialogues.new()

  return app.applications.blueprint.dialogues.form(
    controller,
    blueprint,
    dialogue,
  )

}
