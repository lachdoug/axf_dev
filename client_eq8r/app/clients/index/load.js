app.clients.index.load = ( r, options={} ) => (a,x) => x.appkit.http(
  "/api/clients",
  { resolver: app.clients.index.load.resolver( r, { as: options.as } ) }
)
