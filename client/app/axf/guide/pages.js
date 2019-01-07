app.axf.guide.pages = (c) => [
  app.axf.guide.navigator(c),
  app.axf.guide.pages[ c.params.page ](c)
]
