app.namespaces = controller => controller.routes( {
  '/?': app.namespaces.index,
  '/new': app.namespaces.new,
  '/:namespace_id*': app.namespaces.namespace,
} )
