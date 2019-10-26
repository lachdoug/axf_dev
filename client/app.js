let $preferences = {
  // codeEditorKeymap: 'vim',
}

// let $stashedHREF

let app = (a,x) => a['app']( [
  app.nav,
  app.view,
] )


app.nav = (a,x) => a['app-nav']( [
  app.logo( 20 ),
  'Engines',
], {
  // style: "display: block;",
} )
