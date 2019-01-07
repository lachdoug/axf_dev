app.axf.guide.pages.hello_world = (c) => (a,x) => [
  a.p( [ "Click", app.fa("play", "Run"), "." ] ),
  app.coderunner( `ax("Hello world")` )
]
