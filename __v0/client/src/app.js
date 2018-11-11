class App {

  constructor(a,x) {
    this.a = a;
    this.x = x;
  }

  render() {
    return [
      this.x.router( { bind: 'window', root: '/v0' } ),
      this.css(),
      this.a['.page']( [
        this.header(),
        this.body(),
        this.footer()
      ] )
    ];
  }

};

// App.prototype.header = function() {
//   class Header {
//     render(a,x) {
//       return a.h2( "woosh" );
//     }
//   };
//
//   function CoolStuff(a,x) {
//     return [ a.h3( "Cool stuff!!!" ) ];
//   };
//
//
//   return [ this.a.h1( "Hello world" ), this.a.h2("wow"), Header, CoolStuff ];
// };

// App.prototype.header.prototype.aNewClass = class {
//   render(a,x) { return a.h4( "aNewClass works!!!" ) };
// };



// var app = new App




// var App = function(a,x) {
//   this.a = a;
//   this.x = x;
// };


// ( function() {
//
//   ax( (a,x) => {
//     var app = new App(a,x);
//     return a.page( [
//       x.router( { bind: "window" } ),
//       app.css(),
//       app.header(),
//       appBody(a,x),
//       appFooter(a,x)
//     ] )
//   } );
//
// } )()





//
//
//
// var peopleViews = function (a,x) {
//   return x.controller( {
//    "/people": ( params, controller ) => [
//      a.button( "Go to #1", { onclick: function () { controller.$open("/people/1") } } ),
//      a.button( "Go to #2", { onclick: function () { controller.$open("/people/2") } } ),
//      a.button( "Joanna", { onclick: function () { controller.$open("/joanna") } } ),
//    ],
//    "/joanna": "Joanna",
//    "/people/:id": ( params, controller ) => [
//      a.button( "<", { onclick: function () { controller.$open( "/people" ) } } ),
//      a.button(
//        "Edit #" + params.id,
//        { onclick: function () {
//            controller.$open( "/people/" + params.id + "/edit" )
//        } }
//      ),
//    ],
//    "/people/:id/edit": ( params, controller ) => x.edit(
//      "/test/people/" + params.id,
//      [ "first_name", "last_name",
//
//  // [ "language", "codemode", { required: true, value: "shell", target: "[name='age']" } ]
//
//      , ["age", "markdown", { help: "this is how old you are."} ], [ "sports", "multiselect", {
//        collection: [ "Football", "Golf", "Swimming" ], dependent: { selector: "[name='age']", pattern: /^18|19|[2-9]\d+|\d{3,}$/ } } ] ],
//      { cancel: [ "Cancel", function() { controller.$open("/people/" + params.id) }, { style: "color: blue;"} ] }
//    ) },
//    {
//     root: "/people",
//      bind: "#people-router",
//     default: ( controller ) => a.button("Home", { onclick: function() { controller.$open("/") } })
//    }
//  );
// };
//
// var newsHeadlinesViews = function (a,x) {
//   return x.controller(
//     {
//       '/': ( params, controller ) => a.button("Read", { onclick: function() { controller.$open("/detail") } }),
//       '/detail': ( params, controller ) => a.button("<", { onclick: function() { controller.$open("/") } } )
//       },
//     { bind: "#news-router"}
//   )
// };
//
// var newsArticlesViews = function (a,x) {
//   return x.controller(
//     {
//       '/': "You won't believe!",
//       '/detail': "Stuff is going on."
//     },
//     { bind: "#news-router"}
//   )
// };
//
//
// ax( (a,x) => [
//   a.div( [
//     a.h1( [
//       "Ax",
//       a.img( null, { src: "/ax_logo.png", height: 30 } )
//     ], { style: "color: #48D;" } ),
//     a.strong("Cell Builder"),
//   ], { style: "text-align: center;"} ),
//   x.router( { id: "people-router", root: "/people/2", bind: "window" } ),
//   x.router( { id: "news-router" } ),
//   peopleViews(a,x),
//   a.hr(),
//   peopleViews(a,x),
//   a.hr(),
//   newsHeadlinesViews(a,x),
//   a.hr(),
//   newsArticlesViews(a,x),
// ] );

// apageopen( window.location.pathname );

// acell( (a) => a.dsl.edit(
//   "/test/people/1",
//   [
//     "first_name",
//     "last_name",
//     [ "sports", "multiselect", { collection: [ "Football", "Golf", "Swimming" ] } ]
//   ]
// ) );
// //
// // //
// // // thing = {
// // //   $cell: true,
// // //   $components: [
// // //     { $text: "Hello", id: "greet" },
// // //     { $type: "button", $text: "OK", onclick: () => { greet.$text = "Goodbye" } }
// // //   ]
// // // }
// //
// //
// //
// //
// // // //
// // // // acell( (a) => [
// // // //   a.dsl.form( {
// // // //     action: "/testform",
// // // //     name: "user",
// // // //     data: { year: 2031 },
// // // //     components: (f) => [
// // // //       f.field( "color", { type: "color" } ),
// // // //       f.field( "date", { type: "date" } ),
// // // //       f.field( "datetime", { type: "datetime" } ),
// // // //       f.field( "datetime-local", { type: "datetime-local" } ),
// // // //       f.field( "email", { type: "email" } ),
// // // //       f.field( "file", { type: "file" } ),
// // // //       f.field( "hidden", { type: "hidden" } ),
// // // //       f.field( "number", { type: "number" } ),
// // // //       f.field( "range", { type: "range" } ),
// // // //       f.field( "telephone", { type: "tel" } ),
// // // //       f.field( "time", { type: "time" } ),
// // // //       f.field( "url", { type: "url" } ),
// // // //       f.field( "checkbox", { type: "checkbox" } ),
// // // //       f.field( "password", { type: "site_password" } ),
// // // //
// // // //       f.field( "year", { type: "number", help: "Do stuff." } ),
// // // //       f.field( "name", {
// // // //         type: "string",
// // // //         // help: { $type: "help", $text: "?", style: "cursor: pointer;", onclick: () => alert("This is helpful.") },
// // // //         help: "Wow",
// // // //         comment: "This is a field for entering data. Please enter data nicely.",
// // // //         hint: "Woooo",
// // // //         label: "Cool",
// // // //         dependent: { name: "year", pattern: "^(?!2030).*$" }
// // // //       } ),
// // // //       a.button( "OK - use dsl submit" ),
// // // //     ]
// // // //   } ),
// // // //   a.hr()
// // // // ] );
// // // //
// // // //
// // // //
// // // //
// // // //
// // // //
// // // // // a.dslLoad({
// // // // //   url: '/testform',
// // // // //   render: function(data) {
// // // // //     return a.dslForm({
// // // // //       name: "user",
// // // // //       data: data,
// // // // //       components: (f) => [
// // // // //         f.field("first_name")
// // // // //       ],
// // // // //       // url: '/testform'
// // // // //       // method: 'GET',
// // // // //     });
// // // // //   },
// // // // // });
// // // //
// // // //
// // // //
// // //
// // // //
// // //
// // //
// // // acell( (a) => a.hr() )
// // //
// acell( "Hello World" );
// acell( "Hello World", { style:'color:red;' } )
// acell( [ "Hello", "World" ], { style: "margin: 20px;" } );
// acell( [ [ "H", "e", "l", "l", "o" ], "World" ], { style: "margin: 20px;" } );
// acell( [
//   { $text: "This is text.", style: "color: green;" },
//   { $html: "<i>So is this</i>", style: "color: blue;" }
// ] );
// //
// acell(
//   function(acellBuilder) {
//     return [
//       acellBuilder.tag( 'h1', "Heading 1" ),
//       acellBuilder.tag( 'h2', "Heading 2" ),
//     ]
//   },
//   { style: "text-align: center;" }
// );
//
// acell( (a) =>
//   [
//     a.h3( "Heading 3", { class: "something" } ),
//     a.p( [
//       a.a( "This is a link!", { href: '/' } ),
//       "This is not.",
//     ],
//     { style: "font-size: 24px;"} )
//   ],
//   { style: "border: 1px solid grey; padding: 20px;" }
// );
//
// acss(`
// .rainbow {
//   margin: 50px;
//   color: lightgrey;
//   font-size: 64px;
// }
// .rainbow span {  padding: 30px; }
// .rainbow .red { background-color: red; }
// .rainbow .orange { background-color: orange; }
// .rainbow .yellow { background-color: yellow; }
// .rainbow .green { background-color: green; }
// .rainbow .blue { background-color: blue; }
// .rainbow .indigo { background-color: indigo; }
// .rainbow .violet { background-color: violet; }
// `);
//
// acell( (a) => [
//   a.span( "R", { class: "red" } ),
//   a.span( "A", { class: "orange" } ),
//   a.span( "I", { class: "yellow" } ),
//   a.span( "N", { class: "green" } ),
//   a.span( "B", { class: "blue" } ),
//   a.span( "O", { class: "indigo" } ),
//   a.span( "W", { class: "violet" } ) ],
//   {
//     class: "rainbow",
//      style: "text-align: center; "
//   }
// );
//
// acell( (a) =>
//   [
//     {
//       _sayFoo: function() {
//         this.$components = [ a.div("Foo")  ];
//         setTimeout(this._sayBar, 1000);
//       },
//       _sayBar: function() {
//         this.$components = [ a.div("Bar")  ];
//         setTimeout(this._sayFoo, 1000);
//       },
//       $init: function() { this._sayFoo() },
//     },
//   ],
//   { style: "font-size: 48px; text-align: center;" }
// );
// // //
// acell( (a) => [
//   a.span( {
//     $html: "&larr;",
//     onclick: function() { myCounter._down(); },
//     style: "cursor: pointer; color: grey;"
//   } ),
//   a.span( {
//     id: "myCounter",
//     _num: 0,
//     _up: function() { this._num++; },
//     _down: function() { this._num--; },
//     $update: function() { this.$text = this._num },
//     $init: function() { this.$update() },
//     style: "margin: 50px;",
//   } ),
//   a.span( {
//     $html: "&rarr;",
//     onclick: function() { myCounter._up(); },
//     style: "cursor: pointer; color: grey;"
//   } ),
// ], { style: 'text-align: center; font-size: 96px;'} );
// //
// // acell( (a) => [
// //   a.form(
// //     [
// //       a.h1("My form"),
// //       [ a.label( "First name" ) ],
// //       [ a.input( { name: "first_name"} ) ],
// //       [ a.label( "Last name" ) ],
// //       [ a.input( { name: "last_name" } ) ],
// //       [ a.label( "Age" ) ],
// //       [ a.input( { name: "age" } ) ],
// //       a.button("OK")
// //     ],
// //     {
// //       action: '/testform',
// //       method: 'POST',
// //     }
// //   ),
// // ] );
// //
// //
// //
// // // DSL
// //
// // acell( (a) => a.h1("DSL") );
// //
// acell( (a) => [
//   a.dsl.form( {
//     action: "/testform",
//     $components: [
//       a.input( { name: "name", placeholder: "What is your name?" } ),
//       a.input( { name: "age", placeholder: "How old are you?" } ),
//       a.button("OK")
//     ]
//   } ),
//   a.hr()
// ] );
// //
// // acell( (a) => [
// //   a.dsl.form(
// //     (f) => [
// //       f.input( "string", { pattern: '1', required: true }, { invalidPatternMessage: "Must be 1" } ),
// //       f.input( "number", { type: "number", required: true } ),
// //       f.input( "checkbox", { type: "checkbox", required: true } ),
// //       f.textarea( "myText" ),
// //       f.select(
// //         "select",
// //         [
// //           {
// //             $type: "option",
// //             value: "one",
// //             $text: "First thing on the list"
// //           },
// //           {
// //             $type: "option",
// //             value: "two",
// //             $text: "Second thing on the list"
// //           },
// //           {
// //             $type: "option",
// //             value: "three",
// //             $text: "Third thing on the list"
// //           }
// //         ],
// //         { multiple: true, value: ["two", "three"] },
// //         { includeBlank: true }
// //       ),
// //       f.select(
// //         "select2",
// //         [
// //           {
// //             $type: "option",
// //             value: "one",
// //             $text: "First thing on the list"
// //           },
// //           {
// //             $type: "option",
// //             value: "two",
// //             $text: "Second thing on the list"
// //           }
// //         ],
// //         { multiple: true },
// //         { includeBlank: true }
// //       ),
// //       // f.field( "comment", { type: "text" }, { label: false } ),
// //       // f.field( "comment", { type: "string" } ),
// //       a.button("button", { onclick: function () { alert("hi"); } }),
// //       f.cancel([a.i({class:"fa fa-edit"})]),
// //       f.submit()
// //     ],
// //     { action: "/testform" }
// //   ),
// //   a.hr()
// // ] );
// //
// //
// // acell( (a) => [
// //   a.dsl.form( {
// //     action: "/testform",
// //     data: { email: "myemail@guide.com" },
// //     $components: (f) => [
// //       // f.field("email"),
// //       a.button("Save - use dsl submit"),
// //     ]
// //   } ),
// //   a.hr()
// // ] );
// //
// //
// acell( (a) => [
//   a.dsl.form( {
//     action: "/testform",
//     $components: (f) => [
//       f.input( "expiry[month]" ),
//       f.input( "expiry[year]", { type: "number" } ),
//       f.select( { name: "expiry[renew]", placeholder: "Please select" }, { collection: { 0: "Cool", 1: "Hot" }, includeBlank: true } ),
//       f.submit(),
//     ]
//   }, { data: { expiry: { month: 2, year: 2030 } } } ),
//   a.hr()
// ] );

// acell( (a) => [
//   a.h2("My form"),
//   a.dsl.form(
//     (f) => [
//       // a.p([
//       //   a.label("Nice"),
//       //   a.br(),
//         f.input( "expiry[month]" ),
//       // ]),
//       // a.p([
//       //   a.label("Comment"),
//       //   a.br(),
//       //   f.textarea( "comment" )
//       // ]),
//       // f.input( "expiry[year]", { type: "number" } ),
//       // a.br(),
//       // f.select( { name: "expiry[renew]", placeholder: "Please select" }, { collection: { 0: "Cool", 1: "Hot" }, placeholder: "Please select" } ),
//       // a.br(),
//       f.select( { name: "pets", multiple: true, size: 5 }, { collection: { 0: "Cat", 1: "Dog", 2:"Bird", 3:"Fish" }, placeholder: "Please select" } ),
//       // a.br(),
//       // f.select( "wow", { style: "vertical-align: top;", onclick: ()=>{alert("ha!")} }, { placeholder: "", value: 1 }  ),
//       // a.br(),
//       // f.field( "expiry[year]", "number" ),
//       f.submit(),
//     ],
//     { action: "/testform" },
//     { data: { pets: [ "0", 1, "3" ], expiry: { month: 2, year: 2030, renew: "1" } } }
//   ),
//   a.hr(),
//   a.hr()
// ] );



// acell( (a) => [
//   // [ "Hi", "Ho" ],
//   // a.div( "Hello World", { style: "color: white;" } ),
//   // a.div( [ "Hello World2" ], { style: "color: white;" } ),
//   // a.div( a.h1("Hello World2", { style: "background: grey; padding: 5px;" } ), { style: "background: white; padding: 5px;" } ),
//
//   a.formbrowser( null, {
//     style: 'background-color: darkgrey; padding: 10px; display: block;',
//     _personId: 1,
//     _up: function() { this._personId++; },
//     _down: function() { this._personId--; if ( this._personId < 1 ) { this._personId = 1; } },
//     $init: function() { this.$update() }  ,
//     $update: function() { this.$components = this._components() },
//
//     _components: function () {
//        return [
//         a.recordselection( a.float(
//           [
//             a.span( "", {
//               $html: "&#x25C0;",
//               onclick: function() { this._down(); },
//               style: "cursor: pointer; padding: 5px;"
//             } ),
//             a.span( this._personId, { style: "vertical-align: middle;" } ),
//             a.span( "", {
//               $html: "&#x25B6;",
//               onclick: function() { this._up(); },
//               style: "cursor: pointer; padding: 5px;"
//             } ),
//           ],
//           { style: "float: right;"}
//         ), { style: "overflow: hidden; font-size: 2em; color: white; display: block;" } ),
//         a.dsl.edit(
//           "/test/people/" + this._personId,
//           [
//             [ "first_name", { help: "Stuff" } ],
//             [ "language", "codemode", { required: true, value: "shell", target: "[name='last_name']" } ],
//             [ "last_name", "code", { required: true, mode: "javascript" } ],
//             // [ "last_name", "code", { required: true, mode: "javascript" } ],
//             // [ "last_name2", "markdown", { required: true } ],
//             // [ "last_name2", "markdown", { required: true } ],
//             // [ "registered", "checkbox", { required: true, placeholder: "", collection: [ "Fi", "Fe" ] } ],
//             // [ "sports2", "select", { required: true, placeholder: "", collection: [ "Football" , "Golf", "Swimming" ] } ],
//             [
//               "golf",
//               "select",
//               {
//                 collection: { 0: "Clubs" , 1: "Buggy", 2: "Cart" },
//                 value: 2,
//                 dependent: {
//                   selector: "[name='last_name']",
//                   pattern: "x",
//                 },
//                 multiple: true
//               }
//             ],
//             [
//               "golf2",
//               "radios",
//               {
//                 collection: { 0: "Clubs" , 1: "Buggy", 2: "Cart" },
//                 value: 2,
//                 // dependent: {
//                 //   selector: "[name='golf[]']",
//                 //   pattern: /1/,
//                 // }
//               }
//             ],
//             [
//               "golf2a",
//               "checkboxes",
//               {
//                 collection: { 0: "Clubs" , 1: "Buggy", 2: "Cart" },
//                 value: 2,
//                 // dependent: {
//                 //   selector: "[name='golf[]']",
//                 //   pattern: /1/,
//                 // }
//               }
//             ],
//             [
//               "golf3",
//               "custom/selectinput",
//               {
//                 collection: { 0: "Clubs" , 1: "Buggy", 2: "Cart" },
//                 placeholder: "Pick some",
//                 required: true,
//                 // value: 2,
//                 // dependent: {
//                 //   selector: "[name='golf2']",
//                 //   pattern: /1/,
//                 // }
//               }
//             ],
//             [
//               "golf4",
//               "custom/multiselect",
//               {
//                 collection: { 0: "Clubs" , 1: "Buggy", 2: "Cart" },
//                 // value: 2,
//                 required: true,
//                 // dependent: {
//                 //   selector: "[name='golf3']",
//                 //   pattern: /1/,
//                 // }
//               }
//             ],
//             [
//               "golf5",
//               "select",
//               {
//                 collection: { 0: "Clubs" , 1: "Buggy", 2: "Cart" },
//                 placeholder: "",
//                 // value: 2,
//                 required: true,
//                 // dependent: {
//                 //   selector: "[name='golf[]']",
//                 //   pattern: /1/,
//                 // }
//               }
//             ],
//
//           ],
//           { form: { style: "background-color: white; padding: 30px;" } }
//
//         )
//
//       ];
//     },
//   }),
// ]);


// acell( (a) => [
// ] );


// var personFormFor = function( a, id, data ) {
//   return a.dsl.form(
//     (f) => [
//       f.field( "last_name", {
//         help: "Last name is usually same as family name. Or your surname.",
//         hint: "Enter some text."
//       } ),
//       f.field( "registered", "input/radio", { checkedValue: "1", uncheckedValue: '0' } ),
//       // f.field( "register", "input/checkbox", { checkedValue: "1", uncheckedValue: '0' } ),
//       // f.field( "language", "input", { datalist: [ "French" ] } ),
//       // f.field( "pet", "select", { wrapper: { style: "border: 3px solid #666; padding: 5px;" }, select: { style: "color: blue;" } , value: "Fish", placeholder: "", collection: [ "Dog", "Cat", "Fish" ] } ),
//       // f.field( "sports", "select", { multiple: true, value: [ "Golf" ], collection: [ "Football" , "Golf", "Swimming" ] } ),
//       // f.field( "quarters", "custom/acellcheckboxes", { value: [ "0", "1" ], collection: { 0: "Football" , 1: "Golf", 2: "Swimming" } } ),
//       f.field( "halves", "custom/acellcheckboxes", { value: [ "0", "1" ], collection: [ "Football", "Golf", "Swimming" ] } ),
//       f.field( "days", "custom/acellselectinput", { value: "1", placeholder: "", collection: { 0: "Football" , 1: "Golf", 2: "Swimming" } } ),
//       f.field(
//         "golf",
//         "custom/acellmultiselect",
//         {
//           collection: { 0: "Clubs" , "Buggy": "Buggy", 2: "Cart" },
//           value: "1",
//           dependent: {
//             selector: "[name='days']",
//             pattern: /1/,
//           }
//         }
//       ),
//       f.field(
//         "golf2",
//         "custom/acellradiobuttons",
//         {
//           collection: { 0: "Clubs" , "Buggy": "Buggy", 2: "Cart" },
//           // value: "2",
//           dependent: {
//             selector: "[name='days']",
//             pattern: /1/,
//           },
//           uncheckedValue: "none"
//         }
//       ),
//       // f.field( "club", "number", 7, { input: { readonly: true }, dependent: { selector: "[name='golf[]']", pattern: /Buggy/ } } ),
//       // f.field( "pets2", "select", { value: "Fish", select: [ { multiple: true, disabled: true } , { collection: [ "Dog", "Cat", "Fish" ] } ] } ),
//       // f.field( "hoi", "number", 100, { input: { readonly: true } } ),
//       // f.field( "quiet", "hidden", { label: true } ),
//       // f.field( "accept", "input/checkbox", { help: "Check it!" } ),
//       // f.field( "avatar", "file", { input: { style: "display: none;" }, label: { style: "color: blue;", $html: "<h1>Upload!</h1>" } } ),
//       // f.field( "comment", "textarea", { textarea: { style: "background-color: lightgrey;"}, reverse: true } ),
//       // f.field( "id", "input/text", { value: id, input: { type: "number" } } ),
//       // a.hr(),
//       // f.field( "first_name", { label: "First name", help: "Killian was here.", dependent: { selector: "[name='comment']", pattern: /secret/ } } ),
//       // f.field( "last_name", {
//       //   help: "Last name is usually same as family name. Or your surname.",
//       //   hint: "Enter some text."
//       // } ),
//       // f.field( "pets", "select", { select: [ { multiple: true } , { collection: [ "Dog", "Cat", "Fish" ] } ] } ),
//       // f.field( "age", "input/number", { input: { style: "color: blue;"}, label: { style: "color: red;"} } ),
//       f.submit(),
//     ],
//     { action: "/test/people", data: data }
//   );
// };
//
// acell( (a) => [
//   a.div({
//     style: 'background-color: darkgrey; padding: 10px;',
//     _personId: 1,
//     _up: function() { this._personId++; },
//     _down: function() { this._personId--; if ( this._personId < 1 ) { this._personId = 1; } },
//     $init: function() { this.$update() },
//     $update: function() {
//       var target = this;
//       this.$components = [
//         a.div(
//           [
//             a.span( {
//               $html: "&#x25C0;",
//               onclick: function() { target._down(); },
//               style: "cursor: pointer; padding: 5px;"
//             } ),
//             a.span( target._personId, { style: "vertical-align: middle;" } ),
//             a.span( {
//               $html: "&#x25B6;",
//               onclick: function() { target._up(); },
//               style: "cursor: pointer; padding: 5px;"
//             } ),
//           ],
//           { style: "font-size: 2em;"}
//         ),
//         a.h3( "Form for person #" + target._personId ),
//         a.dsl.request(
//           '/test/people/' + target._personId,
//           {
//             success: function( data, target ) {
//               target.style.backgroundColor = "white";
//               target.$components = [
//                 personFormFor( a, target._personId, data ),
//               ]
//             },
//             error: function( message, target ) {
//               target.style.backgroundColor = "red";
//               target.$text = message;
//             },
//             // url: '/test/people/' + target._personId,
//             // method: "POST",
//             loading: a.div("Please wait", { style: "color: white; font-size: 2em;"} ),
//             request: {
//               style: `background-color: darkgrey;
//                       padding: 30px;
//                       min-height: 29px;`,
//             },
//
//           }
//         ),
//       ];
//     },
//   }),
//   // a.dsl.request("/test/people"),
// ]);

// ax( (a,x) => x.css(`
// cell {
//   font-family: sans-serif;
// }
//
// cell button {
//   cursor: pointer;
// }
//
// cell form {
//   // font-size: 24px;
//   margin: 10px;
//   max-width: 600px;
// }
//
// cell form field wrapper {
//   display: block;
//   margin-bottom: 20px;
// }
//
// cell form label {
//   font-weight: 600;
// }
//
// cell form help helpbutton {
//   float: right;
//   padding: 0px 10px;
//   cursor: pointer;
// }
//
// cell form help helptext {
//   font-size: 0.8em;
//   color: #666;
//   padding: 0px 10px 10px; 10px;
//   display: block;
//   clear: both;
// }
//
// cell form input, cell form select, cell form textarea {
//   box-sizing: border-box;
//   padding: 5px;
//   // font-size: 24px;
//   width: 100%;
//   margin: 0px;
// }
//
//
//
// cell form radiobuttons radiobutton, cell form checkboxes checkbox {
//   display: block;
//   margin-top: 5px;
// }
//
// cell form radiobuttons radiobutton label, cell form checkboxes checkbox label {
//   font-weight: normal;
//   vertical-align: top;
// }
//
// cell form input[type="color"] {
//   height: 49px;
//   width: 49px;
// }
//
// cell form input[type="checkbox"], cell form input[type="radio"] {
//   width: inherit;
//   margin-right: 5px;
// }
//
// cell form hint {
//   color: #333;
//   font-size: 0.8em;
//   font-style: italic;
// }
//
// cell form textarea {
//   resize: vertical;
// }
//
// cell form multiselect selecteditems {
//   display: block;
//   margin-top: -1px;
//   border: 1px solid #999;
//   border-top: none;
//   border-bottom-left-radius: 4px;
//   border-bottom-right-radius: 4px;
//   overflow: hidden;
//   background-color: white;
// }
//
// cell form multiselect selecteditems selecteditem {
//   padding: 5px;
//   display: block;
// }
//
// cell form multiselect selecteditems selecteditem noneselectedmessage {
//   font-style: italic;
//   color: #666;
// }
//
//
//
// cell form multiselect selecteditems selecteditem:hover {
//   background-color: #eee;
// }
//
// cell form multiselect selecteditems selecteditem itemremovebutton {
//   float: right;
// }
//
// cell form multiselect selecteditems selecteditem itemremovebutton button {
//   color: #999;
//   padding: 0px 5px;
//   border: none;
//   background: transparent;
// }
//
// cell form multiselect selecteditems selecteditem itemremovebutton button:hover {
//   color: #666;
// }
//
// cell form codemirror {
//   border-radius: 4px;
//   overflow: hidden;
//   display: block;
//   border: 1px solid #bbb;
// }
//
// cell form codemirror editor {
//   height: 200px;
//   display: block;
//   font-size: 16px;
// }
//
// cell form codemirror toolbar {
//   background-color: #f6f6f6;
//   border-bottom: 1px solid #ddd;
//   display: block;
//   overflow: hidden;
//   cursor: pointer;
// }
//
// cell form codemirror toolbar button {
//   float: right;
//   border: none;
//   margin: 2px;
//   background: none;
//   padding: 5px 10px;
//   color: #999;
// }
//
// cell form codemirror toolbar:hover button {
//   color: #666;
// }
//
// cell form codemirror toolbar mode {
//   display: inline-block;
//   margin: 2px;
//   padding: 5px 10px;
//   color: #999;
//   font-size: 0.8em;
// }
//
// /* This fixed conflicts when SimpleMDE and CodeMirror css
//    files are loaded on the same page. (SimpleMDE uses CodeMirror.) */
// cell form codemirror editor .CodeMirror {
//   min-height: 0px;
//   border: none;
//   border-radius: 0px;
//   padding: 0px;
//   font-family: monospace;
// }
//
// cell form simplemde {
//   border: 1px solid #bbb;
// }
//
// cell form simplemde .CodeMirror {
//   border: 1px solid #bbb;
//   border-top: 1px solid #ddd;
//   border-bottom: 1px solid #ddd;
//
//   border-bottom-left-radius: 0px;
//   border-bottom-right-radius: 0px;
//   min-height: 0px;
//   height: 200px;
// }
//
// cell form simplemde .editor-toolbar {
//   background-color: #f6f6f6;
//   opacity: 1;
//   border-top: 1px solid #bbb;
//   border-left: 1px solid #bbb;
//   border-right: 1px solid #bbb;
// }
//
// cell form simplemde .editor-toolbar a {
//   color: #999 !important;
//   border: none;
//   margin-right: 1px;
// }
//
// cell form simplemde .editor-toolbar:hover {
//   opacity: 1;
// }
//
// cell form simplemde .editor-toolbar a:hover {
//   background: inherit;
//   color: #666 !important;
// }
//
// cell form simplemde .editor-statusbar {
//   background-color: #f6f6f6;
//   color: #999;
//   border: 1px solid #bbb;
//   border-bottom-left-radius: 4px;
//   border-bottom-right-radius: 4px;
//   border-top: none;
//   padding: 3px 6px;
// }
// ` ),
//   { style: "display: none;" }
// );
