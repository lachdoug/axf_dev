app.clients.index.load.resolver.
default = ( r, data ) => (a,x) =>
data.clients.map( ( client ) => a.p(
  app.btn(
    client.name,
    () => r.open( `~${ client.name }` )
  )
) )
