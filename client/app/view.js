app.view = (r) => (a,x) => x.appkit.http(
  `/api${ r.path }`,
  { resolver: app.view.resolver(r) }
)
