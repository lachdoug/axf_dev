app.axf.guide.navigator = function( page ) {

  let a = ax.a
  let x = ax.x

  let pages = [
    "hello_world",
    "components",
    "tags",
    "update"
  ]

  return app.navigator( page, pages, "/axf/guide" )

}
