let app = (a,x) => [
  app.css,
  x.appkit.router( (r) => [
    app.navbar(r),
    r.routes( {
      "%": app.index,
      "/clients%%": app.clients,
    } ),
  ], {
    default: (r) => (a,x) => [
      a.p( `Not found ${ r.path }` ),
    ],
  } ),
]
