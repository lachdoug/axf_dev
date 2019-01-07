app.axf.guide.pages.components = (c) => (a,x) => [
  a.p( "" ),
  app.coderunner(
`ax( [
  [ "█", "█", { $text: "█" }, { $html: "&#9608;" } ],
  "Ax turns strings", "into text nodes", "( with spaces ).",
  { $text: "Objects become elements ( not spaced )." },
  { $nodes: [
    { $text: "Objects need a content property to be set." },
    { $html: "<br>" },
    "There are three content properties: $text, $nodes and $html."
  ] },
  document.createTextNode( "☺" ),
  true, false, 0, 1, 2, 3.142,
  null, undefined, {},
] )`

  )

]
