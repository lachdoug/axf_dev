app2.axf.examples.pages.tags = (c) => (a,x) => [
  a.p( [
    app2.btn( "Tags", () => c.open('%/tags'), "link" ),
    app2.btn( "Tag builder", () => c.open('%/tags/tag_builder'), "link" ),
  ] ),
  x.appkit.router( {
    '': app2.axf.examples.pages.tags.root,
    '/tag_builder': app2.axf.examples.pages.tags.tag_builder,
    // '': (c) => JSON.stringify( c.params ),
  }, { default: (c) => { return JSON.stringify( c.locator ) }, scope: '/tags' } ),

]


app2.axf.examples.pages.tags.root = (c) => (a,x) => [

  a.p( "" ),
  app2.coderunner(
`ax( (a,x) => [

  a( "&#9786;" ),
  a.span( "☺" ),
  a['my-custom-component'],

  a('<hr>'),
  a.hr(),
  a.hr,
  a['hr'],
  a['hr'](),
  document.createElement( "hr" ),
  { $tag: "hr" },
  { $html: "<hr>" },


  a['div#myID.myclass.myclass2']("hi"),
] )`
  )

]
