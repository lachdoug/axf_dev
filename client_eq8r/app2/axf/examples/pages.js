app2.axf.examples.pages = (c) => [
  app2.axf.examples.navigator(c),
  app2.axf.examples.pages[ c.params.page ](c)
]
