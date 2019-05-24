app.clients.new = (r) => (a,x) => [
  a.h2( "New client" ),
  app.clients.new.form(r)
]
