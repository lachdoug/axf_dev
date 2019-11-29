app.system.services.
service = ( controller, name, status ) => (a,x) =>
app.btn(
  a['app-container-state']( {
    $state: status,
    $nodes: function() { return [
      app.containerStateIcons( this.$state ),
      name,
      app.containerErrorIcons( this.$state ),
    ] },
    name: `service_${ name }`
  } ),
  () => controller.open( `/system/service/${ name }` ),
  {
    class: 'btn btn-outline-primary d-block w-100 text-left',
  }
)
