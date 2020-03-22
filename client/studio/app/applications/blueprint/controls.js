app.applications.blueprint.controls = blueprint => controller => (a,x) => [

  controller.routes( {
    '/?': app.applications.blueprint.controls.index( blueprint ),
    '/new': app.applications.blueprint.controls.new( blueprint ),
    '/:control_id': app.applications.blueprint.controls.show( blueprint ),
    '/:control_id/edit': app.applications.blueprint.controls.edit( blueprint ),
    '/:control_id/delete': app.applications.blueprint.controls.delete( blueprint ),
    '/:control_id/components/?': app.applications.blueprint.controls.components( blueprint ),
    '/:control_id/parameters/?': app.applications.blueprint.controls.parameters( blueprint ),
    '/:control_id/tests/?': app.applications.blueprint.controls.tests( blueprint ),
    // '/:control_id/tests/new': app.applications.blueprint.controls.tests.new( blueprint ),
    // '/:control_id/tests/:test_id': app.applications.blueprint.controls.tests.show( blueprint ),
    // '/:control_id/tests/:test_id/edit': app.applications.blueprint.controls.tests.edit( blueprint ),
    // '/:control_id/tests/:test_id/delete': app.applications.blueprint.controls.tests.delete( blueprint ),
  } )

]
