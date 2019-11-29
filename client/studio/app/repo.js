app.repo = ( parent, path ) => controller => controller.routes( {
  '/?': app.repo.show( parent, path ),
  '/branch/?*': app.repo.branch( parent, path ),
  '/reset/?': app.repo.reset( parent, path ),
} )
