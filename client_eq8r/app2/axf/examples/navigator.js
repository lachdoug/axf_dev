app2.axf.examples.navigator = function(c) {

  let a = ax.a
  let x = ax.x

  let pages = [
    "components",
    "strings",
    "arrays",
    "functions",
    "tags",
    "update",
    "forms",
    "reports",
    "codemirror"
  ]

  return app2.navigator( c, c.params.page, pages, "/examples" )

}
