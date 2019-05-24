app2.axf.examples.pages.hello_world = (c) => (a,x) => [
  a.p( [ "Click", app2.fa("play", "Run"), "." ] ),
  app2.coderunner( `ax("Hello world")` )
]
