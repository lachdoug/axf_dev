app.clients.client.edit = (r) => (a,x) => a["app-client-edit"]( [
  a.h2("Edit client"),
  app.clients.client.edit.load(r)
] )
