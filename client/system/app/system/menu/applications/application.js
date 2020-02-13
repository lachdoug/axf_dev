app.system.menu.applications.application = ( controller, name, status ) => (a,x) =>
app.btn(
  a['app-container-state']( {
    id: `application_${ name }`,
    $state: status,
    // $mergeState: function( statusUpdate ) {
    //   console.log( this.$state, statusUpdate )
    //   this.$state = { ...this.$state, ...statusUpdate }
    // },
    $nodes: function() { return [
      app.containerStateIcons( this.$state ),
      name,
      app.containerErrorIcons( this.$state ),
    ] },
    name: `application_${ name }`
  } ),
  () => controller.open( `/system/applications/${ name }` ),
  {
    class: 'btn btn-outline-secondary app-btn d-block w-100 text-left',
  }
)
