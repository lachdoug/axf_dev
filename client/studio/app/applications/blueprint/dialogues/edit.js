app.applications.blueprint.dialogues.edit = blueprint => controller => (a,x) => {

  let dialogue = blueprint.dialogues.find( controller.params.dialogue_id )

  return app.applications.blueprint.dialogues.form(
    controller,
    blueprint,
    dialogue
  )

}
