app.axf.guide = () => function(a,x) {
  return [
    a.h1("Guide"),
    app.axf.guide.navigator( "hello_world" ),
    a.p( [ "Click", fa("play", "Run"), "." ] ),
    app.coderunner( `ax("Hello world")` )
  ]
}
