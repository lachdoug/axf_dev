app2.axf.examples.pages.codemirror = (c) => (a,x) => [
  a.p( "" ),
  app2.coderunner(
`ax( (a,x) => x.codemirror( "let a = 1;\\n", { mode: "javascript" } ) )
`
  )

]
