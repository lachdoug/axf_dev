app.applications.blueprint.dialogues.components = blueprint => controller =>
(a,x) => {

  let dialogue = blueprint.dialogues.find( controller.params.dialogue_id )

  return [

    a.h5( `Dialogue ${ dialogue.id + 1 } components` ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      dialogue.components,
      cc.dialogue.designer( blueprint )
    ),

  ]

}
