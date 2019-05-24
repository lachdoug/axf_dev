app.clients.client.delete = (r) => (a,x) => [
  a.h2( "Delete client" ),
  a["app-client-delete"]( [
    `Are you sure that you want to delete ${ r.params.name }`,
    app.btn( "No, don't delete", () => r.open( "" ) ),
    app.btn( `Yes, delete it`, ( e, el ) => {
      el.$nodes = () => app.clients.client.delete.submit(r)
    } ),
  ] )
]
