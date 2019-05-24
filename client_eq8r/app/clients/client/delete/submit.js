app.clients.client.delete.submit = (r) => (a,x) => x.appkit.http(
  `/api/clients/~${ r.params.name }`,
  {
    method: "DELETE",
    resolver: app.clients.client.delete.submit.resolver(r)
  }
)
