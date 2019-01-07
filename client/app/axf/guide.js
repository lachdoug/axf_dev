app.axf.guide = (c) => function(a,x) {
  return [
    a.p("Guide"),
    x.appkit.router( {
      '': app.axf.guide.root,
      '/:page**': app.axf.guide.pages,

      // '/:page': app.axf.guide[ c.params.page ],
    }, { scope: '/guide', lost: 'show' } ),
    // app.axf.guide.navigator( c, "hello_world" ),
    // a.p( [ "Click", app.fa("play", "Run"), "." ] ),
    // app.coderunner( `ax("Hello world")` )
  ]
}
