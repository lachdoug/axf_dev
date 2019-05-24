app.clients.client.show.load = (r) => (a,x) => x.appkit.http(
  `/api/clients/~${ r.params.name }`,
  { resolver: app.clients.client.show.load.resolver(r) }
)
