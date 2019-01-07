app.axf.guide.hello_world = function(a,x) {
  return [
    app.axf.guide.navigator( "hello_world" ),
    a.p( [ "Click", app.fa("play", "Run"), "." ] ),
    app.coderunner( `ax("Hello world")` )
  ]
}
