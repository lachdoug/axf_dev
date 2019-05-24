app2.axf.root = (c) => (a,x) => [

  a['div.text-center']( [
    a.h1("The Ax Function"),
    a.h4( "hack web content" ),
    a.img( { src: "/ax_logo.png", width: 140, height: 60 } ),
  ] ),

  // a.p( "Use Ax to create active web content and SPAs." ),
  //
  // a.p( "Ax renders elements to the DOM using JavaScript." ),
  //
  // a.p( "The rendered output sits in the DOM as nested state machines. There is no global state and no diffing." ),

  x.md ( [

  ] ),
  //
  // a['div.brand'](
  //   app2.btn( [
  //     a['.axtext']( "ax" ),
  //     a.span( [
  //       a.img( null, { src: "ax_logo.png", width: 70, height: 30 } ),
  //       a.br(),
  //       a['.subtext']( "function" ),
  //     ], { style: "display: inline-block"} ),
  //   ],
  //   () => app2.open('/'),
  //   {
  //     buttonTag: {
  //       // style: active === "" ? activeCss : ""
  //     }
  //   }
  // )
  // ),

  a['.row.mt-4']( [
    // a['.col']( [
    //   a.$$.p(
    //     "Dear devs,",
    //     "Axf is a javascript tool for developing dynamic web content and SPAs.",
    //     [
    //       "My hope is that Axf is relatively easy to learn.",
    //       "I am biased, but to my mind",
    //       "Axf is simpler to wrap ones head around than other",
    //       "front-end technologies, such as React, Angular and Vue."
    //     ],
    //     [
    //       "Axf evolved from helpers that I wrote for the",
    //       a.a( "Engines", { href: "http://engines.org", target: "http://engines.org"} ),
    //       "admin gui.",
    //       "In the first iteration I used",
    //       a.a( "Cell", { href: "https://github.com/intercellular/cell"} ),
    //       "and I really liked its approach.",
    //       "I ended up using Cell for rendering all the views in the application.",
    //       "Ethan Gliechtenstein created Cell and I owe him a special thank you for his work.",
    //       "Ethan went offline around the start of May 2018. I hope that he is alright."
    //     ]
    //   ),
    // ] ),
    a['.col']( [

      app2.coderunner(
`ax( (a,x) => [
  a.h1( {
    $state: 10,
    $nodes: ( el, state ) => [
      { $text: "⯇", $on: { click: () => { el.$state-- } } },
      { $text: "⯈", $on: { click: () => { el.$state++ } } },
      a.em( state ),
    ]
  } ),
  a.table ( {
    $html: function() {
      let i = 0
      let arr = Array(10000).fill().map(
        () => \`<tr><td>\${ i++ }</tr></td>\`
      )
      return arr.join('')
    }
  } ),
] )`,
// a.table( function () {
//   let i = 0
//   let arr = Array(100).fill(0)
//   arr = arr.map(
//     () => \`<tr><td>\${ i++ }</tr></td>\`
//   )
//   debugger
//   return a( arr.join('') )
// } ),
// a.table( function () {
//   let i = 0
//   return Array(100).fill( () => a.tr( a.td( i++ ) ) )
// } )
{
  height: 200
}
      )
    ] ),





    ] ),
    // a.Counter( [
    //   { $text: "", $on: { click: () => { debugger; this.$('^').$state-- } } },
    // ] ),

  // ] ),


]
