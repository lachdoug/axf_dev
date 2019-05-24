
app.clients.index = (r) => (a,x) => [
  a.h2( "Clients" ),
  app.btn( "New", () => r.open( "new" ) ),
  app.btn( "Sort", () => r.open( "sort" ) ),
  a.hr,
  app.clients.index.load(r),
]
