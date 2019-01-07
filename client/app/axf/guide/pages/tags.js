app.axf.guide.pages.tags = (c) => (a,x) => [
  a.p( [
    app.btn( "Tags", () => c.open('%/tags'), "link" ),
    app.btn( "Tag builder", () => c.open('%/tags/tag_builder'), "link" ),
  ] ),
  x.appkit.router( {
    '': app.axf.guide.pages.tags.root,
    '/tag_builder': app.axf.guide.pages.tags.tag_builder,
    // '': (c) => JSON.stringify( c.params ),
  }, { default: (c) => { return JSON.stringify( c.locator ) }, scope: '/tags' } ),

]


app.axf.guide.pages.tags.root = (c) => (a,x) => [

  a.p( "" ),
  app.coderunner(
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
