app.system.menu.services.
service = ( controller, name, status ) => (a,x) =>
app.btn(
  a['app-container-state']( {
    id: `service_${ name }`,
    $state: status,
    // $mergeState: function( statusUpdate ) {
    //   this.$state = { ...this.$state, ...statusUpdate }
    // },
    $nodes: function() { return [
      app.containerStateIcons( this.$state ),
      name,
      app.containerErrorIcons( this.$state ),
    ] },
    name: `service_${ name }`
  } ),
  () => controller.open( `/system/services/${ name }` ),
  {
    class: 'btn btn-outline-secondary app-btn d-block w-100 text-left',
  }
)
