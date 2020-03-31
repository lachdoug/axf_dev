app.applications.blueprint.dialogues = blueprint => controller => (a,x) => [

  controller.routes( {
    '/?': app.applications.blueprint.dialogues.index( blueprint ),
    '/new': app.applications.blueprint.dialogues.new( blueprint ),
    '/:dialogue_id': app.applications.blueprint.dialogues.show( blueprint ),
    '/:dialogue_id/edit': app.applications.blueprint.dialogues.edit( blueprint ),
    '/:dialogue_id/delete': app.applications.blueprint.dialogues.delete( blueprint ),
    '/:dialogue_id/components/?': app.applications.blueprint.dialogues.components( blueprint ),
    '/:dialogue_id/parameters/?': app.applications.blueprint.dialogues.parameters( blueprint ),
    '/:dialogue_id/tests/?': app.applications.blueprint.dialogues.tests( blueprint ),
  } )

]
