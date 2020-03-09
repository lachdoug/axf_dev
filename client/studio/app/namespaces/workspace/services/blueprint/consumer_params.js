app.namespaces.workspace.services.blueprint.consumer_params = blueprint => controller => (a,x) => [

  controller.routes( {
    '/?': app.namespaces.workspace.services.blueprint.consumer_params.index( blueprint ),
    '/new': app.namespaces.workspace.services.blueprint.consumer_params.new( blueprint ),
    '/:consumer_param_id': app.namespaces.workspace.services.blueprint.consumer_params.show( blueprint ),
    '/:consumer_param_id/edit': app.namespaces.workspace.services.blueprint.consumer_params.edit( blueprint ),
    '/:consumer_param_id/delete': app.namespaces.workspace.services.blueprint.consumer_params.delete( blueprint ),
  } )

]
