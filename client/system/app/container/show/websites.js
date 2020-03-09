app.container.show.websites = container => (a,x) => container.websites.length ? [
  a.hr,
  container.websites.map(
    ( website ) => [
      a.a( website, { href: website, target: website } ),
      a.br
    ]
  )
] : null
