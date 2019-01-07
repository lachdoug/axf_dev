app.axf.guide.navigator = function(c) {

  let a = ax.a
  let x = ax.x

  let pages = [
    "hello_world",
    "components",
    "tags",
    "update",
    "forms"
  ]

  return app.navigator( c, c.params.page, pages, "/guide" )

}
