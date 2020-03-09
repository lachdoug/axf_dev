app.applications.branch = controller => controller.routes( {
  '/?': app.applications.branch.show,
  '/set': app.applications.branch.set,
  '/remove': app.applications.branch.remove,
}, {
  lazy: true,
} )
