app.system.menu.applications.application = ( controller, name, status ) => (a,x) =>
app.btn(
  a['app-container-state'](
    ( el, container ) => [
      app.container.icons.state( container.status ),
      name,
      app.container.icons.error( container.status ),
    ],
    {
      id: `application_${ name }`,
      $state: { status: status },
      name: `${ name }`
    }
  ),
  () => controller.open( `/system/applications/${ name }` ),
  {
    class: 'btn app-btn d-block w-100 text-left',
  }
)
