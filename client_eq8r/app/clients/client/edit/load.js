app.clients.client.edit.load = (r) => () => (a,x) => x.appkit.http(
  `/api/clients/~${ r.params.name }`,
  {
    resolver: app.clients.client.edit.load.resolver(r)
  }
)
