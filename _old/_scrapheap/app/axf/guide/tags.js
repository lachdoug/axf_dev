app.axf.guide.tags = function(a,x) {
  return [
    app.axf.guide.navigator( "tags" ),
    a.hr,
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
}
