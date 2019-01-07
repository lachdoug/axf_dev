// App.examples = {}
//
// App.examples.table = (a,x) => x.appkit.table(
//   [
//     [ "First", "Second" ],
//     [ "Fizz", "Buzz" ],
//     [ "Foo", "Bar" ]
//   ],
//   {
//     tableTag: {},
//     trTag: function( i, row ) {
//       return {
//         $on: { click: function(e) {
//           alert( "Row " + " " + i );
//         } }
//       }
//     },
//     thTag: function( i, j, content ) {
//       return {
//         $on: { click: function(e) {
//           alert( "Head: row " + i + ", col " + j );
//         } }
//       }
//     },
//     tdTag: function( i, j, content ) {
//       return {
//         $on: { click: function(e) {
//           alert( "Data: row " + i + ", col " + j );
//         } }
//       }
//     },
//   }
// )
//
// App.play = (a,x) => [
//
//     // { $state: 0,
//     //   $nodes: (id,e) => [
//     //     x.appkit.button( '<', function() { e.$state-- } ),
//     //     x.appkit.button( '>', function() { e.$state++ } ),
//     //     x.appkit.fetch( `/test/people/${id}` ) ] },
//
//   a['div.rolodex']( {
//     $state: 0,
//     $nodes: function( id, e ) { return [
//       x.btn( '<', function() { e.$state-- } ),
//       x.btn( '>', function() { e.$state++ } ),
//       a['div.person']( {
//         $nodes: x.appkit.fetch( `/test/people/${id}`, {
//           success: function( data ) {
//             this.$nodes = x.appkit.report( (r) => [
//               a.h1( "Person " + id ),
//               r.fields(
//                 "first_name",
//                 "last_name",
//                 "accepted",
//                 {
//                   dependent: "accepted",
//                   key: "joined",
//                   type: "date",
//                   stringify: "toLocaleDateString"
//                 },
//                 { name: "home", as: "link" }
//               ),
//               a.legend( "Profile" ),
//               r.one( "profile", (rr) => [
//                 rr.fields( "age", { key: "email_addresses", as: "list", type: "ol" } )
//               ] ),
//               a.legend( "Roles" ),
//               r.many( "roles", (rr) => [
//                 // x.appkit.put( rr.$data ),
//                 rr.items( ( rri, i ) => [
//                   a.strong( "Role " + i ),
//                   rri.fields( "title", {
//                     dependent: { name: "roles[][title]" },
//                     key: "appointed",
//                     type: "date",
//                     stringify: "toLocaleDateString"
//                   } ),
//                 ] ),
//               ] ),
//
//               a.legend( "Media" ),
//               r.fields(
//                 { key: "icon", as: "media" },
//                 { key: "avatar", as: "media" },
//                 { key: "video", as: "media", type: "video" },
//                 { key: "audio", as: "media", type: "audio" },
//               ),
//               x.appkit.put( data ),
//               a.h5(id),
//               a.label( "First name:" ), '',
//               r.text( { key: "first_name", value: data.first_name } ),
//               a.br,
//               a.label( "Age:" ), '',
//               r.text( { key: "age", value: data.age, type: "number" } ),
//               a.br,
//               a.label( "Joined:" ), '',
//               r.text( {
//                 key: "joined",
//                 value: data.joined,
//                 type: "date",
//                 stringify: {
//                   method: "toLocaleDateString",
//                   // arguments: [
//                   //   { year: 'numeric',
//                   //     month : 'numeric',
//                   //     day : '2-digit' }
//                   // ],
//                 }
//               } ),
//               r.object( { value: data } ),
//
//               r.check( { value: "on", label: "Accepted?" } ),
//
//               r.list( { value: [ "apple", "banana", "lemon" ] } ),
//               r.list( { value: [ "apple", "banana", "lemon" ], type: "ol" } ),
//               r.list( { value: [ "apple", "banana", "lemon" ], type: "div", item: ( item ) => a.p( a.a( item, { href: item } ) ) } ),
//
//               r.checkboxes( { value: [ "apple", "banana", "lemon" ], collection: [ "pear", "apple", "kiwi", "banana", "lemon", "orange" ] } ),
//               r.radios( { value: "apple", collection: [ "pear", "apple", "kiwi", "banana", "lemon", "orange" ] } ),
//
//           ], { data: data } )
//           }
//         } )
//       } ),
//     ] },
//   } ),
//
//
//
//   // x.appkit.router( { bind: 'window', root: '/axfunction' } ),
//   // x.appkit.widget.clock(),
//   // x.md( "My friends\n===" ),
//   // a.div( {
//   //   $nodes: [
//   //     x.btn( '<', function() {
//   //       this.$('^ div.fetch').$state--
//   //     } ),
//   //     x.btn( '>', function() {
//   //       this.$('^ div.fetch').$state++
//   //     } ),
//   //     a['div.fetch']( {
//   //       $nodes: function( id ) {
//   //         return x.appkit.fetch( `/test/people/${id}`, {
//   //           success: function( data ) {
//   //             this.$nodes = x.appkit.form( (f) => [
//   //               a.h5(id),
//   //               f.fields( "first_name", "last_name" ),
//   //             ], { data: data } )
//   //           }
//   //         } )
//   //       },
//   //       $state: 0
//   //     } ),
//   //   ],
//   // } ),
//
//   // x.appkit.fetch( '/test/people' ),
//
//
//
//
//   // x.appkit.controller(
//   //   {
//   //     '/': function( params, controller ) {
//   //       return [
//   //         x.btn(
//   //           "Help",
//   //           () => controller.$to("/help"),
//   //           { icon: "fa fa-question" }
//   //         ),
//   //         App.examples.table,
//   //       ]
//   //     },
//   //     '/help': function( params, controller ) {
//   //       return x.btn(
//   //         "Home",
//   //         () => controller.$to("/"),
//   //         { icon: "fa fa-home" }
//   //       )
//   //     },
//   //   },
//   //   {
//   //     bind: "appkit-router",
//   //     default: null,
//   //     transition: "fade"
//   //   }
//   // ),
//   //
//   //
//   // a('<hr>'),
//   // a.hr(),
//   // a.hr,
//   // a['hr'],
//   // a['hr'](),
//   // document.createElement( "hr" ),
//   // { $tag: "hr" },
//   // { $html: "<hr>" },
//   //
//   // null, undefined, /.+/, '',
//   // [], a['tester'],
//   // {},
//   //
//   // a['div#myID.myclass.myclass2']("hi"),
//   //
//   //
//   // true, false, 0, 1, 2, 3.142,
//   // "☺", "☺", "☺", "☺", "☺",
//   // { $text: "☺" },
//   // { $html: "&#9786;" },
//   // document.createTextNode( "☺" ),
//   // a( "&#9786;" ),
//   // a.span( "☺" ),
//   //
//   // a("<hr>"),
//   //
//   // "Text",
//   // a("<p><em>HTML</em></p>"),
//   // { $tag: "p", $text: "Text in <p>" },
//   // { $tag: "div", $html: "<p><em>HTML</em> in &lt;div&gt;</p>" },
//   // a.p( "Text in <p>" ),
//   // a.div( { $html: "<p><em>HTML</em> in &lt;div&gt;</p>" } ),
//   // a.p( {
//   //   id: "myId",
//   //   class: "my-class-a my-class-b",
//   //   $text: 'Text in <p id="myId" class="my-class-a my-class-b">'
//   // } ),
//   // a["my-custom-tag"]( "Text in <my-custom-tag>" ),
//   // a["p.my-class"]( 'Text in <p class="my-class">' ),
//   // a["p#myId.my-class-a.my-class-b"]( 'Text in <p id="myId" class="my-class-a my-class-b">' ),
//   //
//   // { $tag: "hr" },
//   //
//   // a.form( a.input( { placeholder: "A form with input" } ) ),
//   //
//   // a['hr'](),
//   //
//   // a.select(
//   //   [ "red", "orange", "yellow", "green", "blue", "indigo", "violet" ].
//   //   map( (i) => a.option(i)  ),
//   //   {
//   //     $on: { change: function() {
//   //       this.style.backgroundColor = this.options[ this.selectedIndex ].value }
//   //     },
//   //     multiple: true, size: 7
//   //   }
//   // ),
//   //
//   // a.button( 'Click me', { $on: {
//   //   click: function () {
//   //     this.$nodes = [ "Clicked", a( '&#10004;' ) ]
//   //   },
//   // } } ),
//   //
//   // {
//   //   $text: () => Date.now(),
//   //   $on: {
//   //     mouseover: function () { this.$render() },
//   //     mouseleave: function () { setTimeout( () => { this.$render() }, 1000 ) }
//   //   },
//   // },
//   //
//   // a.hr(),
//   //
//   // x.md('**bold**', { inline: true } ),
//   //
//   // a.hr(),
//   //
//   // 'Click dice to roll',
//
//   // {
//   //   $tag: "h4",
//   //   $text: function( person ) {
//   //     return `Your name is ${ person.name } and your age is ${ person.age }.`
//   //   },
//   //   $state: { name: "Lachlan", age: 46 }
//   // },
//   // { $tag: "p", $html: function( person ) { return `Your name is <strong>${ person.name }</strong> and your age is <em>${ person.age }</em>.` }, $state: { name: "Lachlan", age: 46 } },
//   // {
//   //   $tag: "p",
//   //   $nodes: function( person ) {
//   //     return [
//   //       [ ( new Date ).toLocaleTimeString() ],
//   //       'Your name is ',
//   //       a.strong( { $text: ( name ) => name, $state: person.name } ),
//   //       ' and your age is ',
//   //       a.em( { $text: ( age ) => age, $state: person.age } ),
//   //
//   //     ]
//   //   },
//   //   $state: { name: "Lachlan", age: 46 },
//   //   $update: function(a,b) {
//   //     this.querySelector('strong').$state = this.$state.name
//   //     this.querySelector('em').$state = this.$state.age
//   //     // return true
//   //   }
//   // },
//   // a.button("Click me", { $on: { click: function () {
//   //   this.previousSibling.$state = { name: "Joanna", age: 45 }
//   // } } } ),
//   // { $html: () => "<h2>!</h2>" },
//   // a.h1("Wow", { class: "red" } ),
//   // a("dgfdfgfhdhgdh"),
//   // a['']("X"),
//   // [ "Hello", " ", "World" ],
//   // document.createTextNode( "World!"),
//   // {
//   //   $text: "World",
//   //   $on: {
//   //     mouseover: function () { this.$change() },
//   //     click: function () { this.$change() },
//   //   },
//   //   $oldTime: Date.now(),
//   //   $change: function() {
//   //     this.$text = this.$oldTime
//   //     this.$oldTime = Date.now()
//   //   }
//   // },
//   // {
//   //   $tag: "h4",
//   //   $text: function( person ) {
//   //     return `Your name is ${ person.name } and your age is ${ person.age }.`
//   //   },
//   //   $state: { name: "Lachlan", age: 46 }
//   // },
//   // { $tag: "p", $html: function( person ) { return `Your name is <strong>${ person.name }</strong> and your age is <em>${ person.age }</em>.` }, $state: { name: "Lachlan", age: 46 } },
//   // {
//   //   $tag: "p",
//   //   $nodes: function( person ) {
//   //     return [
//   //       [ ( new Date ).toLocaleTimeString() ],
//   //       'Your name is ',
//   //       a.strong( { $text: ( name ) => name, $state: person.name } ),
//   //       ' and your age is ',
//   //       a.em( { $text: ( age ) => age, $state: person.age } ),
//   //
//   //     ]
//   //   },
//   //   $state: { name: "Lachlan", age: 46 },
//   //   $update: function(a,b) {
//   //     this.querySelector('strong').$state = this.$state.name
//   //     this.querySelector('em').$state = this.$state.age
//   //     // return true
//   //   }
//   // },
//   // a.button("Click me", { $on: { click: function () {
//   //   this.previousSibling.$state = { name: "Joanna", age: 45 }
//   // } } } ),
//   // { $html: () => "<h2>!</h2>" },
//   // a.h1("Wow", { class: "red" } ),
//   // a("<hr>"),
//   // a("dgfdfgfhdhgdh"),
// ]
