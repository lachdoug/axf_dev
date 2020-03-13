app.system.menu.services.
service = ( controller, name, status ) => (a,x) =>
app.btn(
  a['app-container-state'](
    ( el, container ) => [
      app.container.icons.state( container.status ),
      name,
      app.container.icons.error( container.status ),
    ],
    {
      id: `service_${ name }`,
      $state: { status: status },
      name: `${ name }`
    }
  ),
  () => controller.open( `/services/${ name }` ),
  {
    class: 'btn app-btn d-block w-100 text-left',
  }
)
