app.clients.client.show.client = ( r, client ) => (a,x) => [
  a.p( [
    app.btn( "Delete", () => r.open( "delete" ) ),
    app.btn( "Edit", () => r.open( "edit" ) ),
  ] ),
  a.hr,
  a.h3( client.name ),
  client.controllers.map( (controller) => a.p( app.btn(
    controller.name,
    () => alert( controller.name )
  ) ) )
]
