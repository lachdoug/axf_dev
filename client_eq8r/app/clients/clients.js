app.clients.client = (r) => (a,x) => [
  a["app-client"](
    r.routes(
      {
        "%": app.clients.client.show,
        "/delete": app.clients.client.delete,
        "/edit": app.clients.client.edit,
      }
    ),
  )
]
