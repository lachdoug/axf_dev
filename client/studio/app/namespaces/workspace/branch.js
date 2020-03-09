app.namespaces.workspace.branch = controller => controller.routes( {
  '/?': app.namespaces.workspace.branch.show,
  '/set': app.namespaces.workspace.branch.set,
  '/remove': app.namespaces.workspace.branch.remove,
}, {
  lazy: true,
} )
