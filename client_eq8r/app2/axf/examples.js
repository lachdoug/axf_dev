app2.axf.examples = (c) => function(a,x) {
  return [
    a.p("Examples"),
    x.appkit.router( {
      '': app2.axf.examples.root,
      '/:page**': app2.axf.examples.pages,

      // '/:page': app2.axf.examples[ c.params.page ],
    }, { scope: '/examples', lost: 'show' } ),
    // app2.axf.examples.navigator( c, "hello_world" ),
    // a.p( [ "Click", app2.fa("play", "Run"), "." ] ),
    // app2.coderunner( `ax("Hello world")` )
  ]
}
