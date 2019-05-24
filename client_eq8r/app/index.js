app.index = (r) => (a,x) => [
  a.h2("Welcome"),
  app.btn( "Clients", () => r.open( "%clients" ) ),
]
