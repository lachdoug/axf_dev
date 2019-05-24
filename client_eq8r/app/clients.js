app.clients = (r) => (a,x) => [
  // r.$scope,
  r.routes(
    {
      "/new": app.clients.new,
      "/sort": app.clients.order,
      "%": app.clients.index,
      "/~:name%%": app.clients.client
    }
  )
]
