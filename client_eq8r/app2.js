let app2 = (a,x) => [
  app.navbar,
  x.appkit.router( { "/**": (c) => app.axf(c) } )
]


// debugger


// ax( app )
//
//
// ax( (a,x) => a.h1( {
//   $state: 0,
//   $nodes: (el) => el.$state,
//   $on: {
//     "click": (e,el) => el.$state++,
//   },
// } ) )


// let gui = (a,x) => [
//   app.navbar,
//   x.appkit.router( { "/**": (c) => gui.pages(c) } )
// ]
//
// gui.pages = (c) => (a,x) => [
//
//   x.appkit.router( {
//     "/": app.axf.root,
//     "/get": app.axf.get,
//     "/examples**": app.axf.examples,
//     "/extensions**": app.axf.extensions,
//     // "/axf**": app.axf,
//     // "/examples/:page": function( params, controller ) {
//     //   return app.axf.examples[ params.page ]
//     // },
//     // "/dev": this.dev(a,x),
//   }, {
//     // transition: x.appkit.transition.fade,
//     lost: "show"
//   } )
//
// ]
//
// ax( gui )





// ax( (a,x) => a.h1("Hello") )


// let app = (a,x) => x.appkit.router(
//   {
//     '/': app.root,
//     // '/people/:id': app.people,
//     // [ '/people/:id', "person" ]: app.people,
//     '/people**': app.people
//   },
//   { mount: "/axf", root: '/', lost: 'warn' }
// )
//
//
// // app.open = function( path ) {
// //   document.querySelector('appkit-router').$to( location )
// // }
//
// app.btn = function( component, onclick, klass='primary', options={} ) {
//   return ax.x.appkit.button( component, onclick, {
//     buttonTag: {
//       disabled: options.disabled,
//       class: `btn btn-${ klass }`,
//     }
//   } )
// }
//
//
// app.root = ( c ) => [
//   "Home",
//   app.btn( "People", () => c.open( 'people' ) )
// ]
//
// app.people = (c) => (a,x) => [
//   a.h1( "People" ),
//   a.p( `locator: ${ JSON.stringify( c.locator ) }` ),
//   a.p( `params: ${ JSON.stringify( c.params ) }` ),
//   app.btn( "#1", () => c.open( '%/people/1' ) ),
//   app.btn( "#2", () => c.open( '%/people/2' ) ),
//   app.btn( "Home", () => c.open( '%' ) ),
//
//   x.appkit.router(
//     {
//       '/': app.people.index,
//       '/:id**': app.person,
//     },
//     { scope: "/people", root: '/', lost: 'show' }
//   ),
//   a.hr
//
// ]
//
// app.people.index = [
//   "Index people"
// ]
//
// app.person = (c) => (a,x) => [
//   a.p( `locator: ${ JSON.stringify( c.locator ) }` ),
//   a.p( `params: ${ JSON.stringify( c.params ) }` ),
//   app.btn( "#1", () => c.open( '%/../1' ) ),
//   x.appkit.router(
//     {
//       '/': app.person.show,
//       '/edit': app.person.edit,
//       // [ '/people/:id', "person" ]: app.people,
//       // '/people*': app.people
//     },
//     { scope: `/${c.params.id}`, root: '/', lost: 'show' }
//   ),
//   a.hr
// ]
//
// app.person.show = ( c ) => (a,x) => [
//   a.h1( `Person ${ c.params.id }`),
//   a.p( `locator: ${ JSON.stringify( c.locator ) }` ),
//   a.p( `params: ${ JSON.stringify( c.params ) }` ),
// ]


// () => x.appkit.controller( {
//     '': index people
//     '/#id': show person
//     '/#id/edit': edit person
//   },
//   { scope: '/people' }
// )


// ax( {
//   // $tag: "input",
//   $nodes: [
//     { $tag: "input", $init: function() { this.focus() } }
//   ],
//   $init: function() {
//     // this.addEventListener(
//     //   "blur",
//     //   function() { alert('blur') }
//     // );
//     // this.focus()
//     // ax.throw()
//   },
//   // $on: { "blur": function() { debugger } }
// } )

// ax( { $nodes: function() { return "wooo" } } )

// ax( app )
// ax( App2 )
// ax( [ "hi", "ho", ax.a.hr ] )
// ax( [
//   "hi",
//   ax.a(`
//   <div class="btn-group" role="group">
//     <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     Dropdown
//     </button>
//     <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
//       <a class="dropdown-item" href="#">Dropdown link</a>
//       <a class="dropdown-item" href="#">Dropdown link</a>
//     </div>
//   </div>
//   `)
//
// ] )

// ax( (a,x) => [ "Hello", "world", a.hr, a['ax-appkit-component'], a.div("fdgfdgfd"), a.button("OK") ], { id: "here", $tag: "div" } )
