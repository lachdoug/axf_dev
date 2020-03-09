app.menuButton = controller => ( label, path, fa ) => app.btn(
  app.icon( fa, label ),
  () => controller.open( path ),
  { class: 'btn app-btn d-block w-100 text-left' }
)
