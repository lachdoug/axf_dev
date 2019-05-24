app.clients.order = (r) => (a,x) => [
  a.h2( "Sort clients" ),
  app.btn( "Done", () => r.open() ),
  a.hr,
  app.clients.index.load( r, { as: "sortable" } ),
]
