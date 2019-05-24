app2.axf.examples.pages.tags.tag_builder = (c) => (a,x) => [
  a.h3( "Tag builder" ),
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
