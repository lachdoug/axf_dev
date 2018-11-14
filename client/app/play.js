App.examples = {}

App.examples.table = (a,x) => x.appkit.table(
  [
    [ "First", "Second" ],
    [ "Fizz", "Buzz" ],
    [ "Foo", "Bar" ]
  ],
  {
    tableTag: {},
    trTag: function( i, row ) {
      return {
        $on: { click: function(e) {
          alert( "Row " + " " + i );
        } }
      }
    },
    thTag: function( i, j, content ) {
      return {
        $on: { click: function(e) {
          alert( "Head: row " + i + ", col " + j );
        } }
      }
    },
    tdTag: function( i, j, content ) {
      return {
        $on: { click: function(e) {
          alert( "Data: row " + i + ", col " + j );
        } }
      }
    },
  }
)

App.play = (a,x) => [

    // { $state: 0,
    //   $nodes: (id,e) => [
    //     x.appkit.button( '<', function() { e.$state-- } ),
    //     x.appkit.button( '>', function() { e.$state++ } ),
    //     x.appkit.fetch( `/test/people/${id}` ) ] },

  a['div.rolodex']( {
    $state: 0,
    $nodes: function( id, e ) { return [
      x.btn( '<', function() { e.$state-- } ),
      x.btn( '>', function() { e.$state++ } ),
      a['div.person']( {
        $nodes: x.appkit.fetch( `/test/people/${id}`, {
          success: function( data ) {
            this.$nodes = x.appkit.report( (r) => [
              a.h1( "Person " + id ),
              r.fields( "first_name", "last_name", "accepted", { dependent: "accepted", name: "joined", type: "date", stringify: "toLocaleDateString" }, { name: "home", as: "link" } ),
              a.legend( "Profile" ),
              r.one( "profile", (rr) => [
                rr.fields( "age", { name: "email_addresses", as: "list", type: "ol" } )
              ] ),
              a.legend( "Roles" ),
              r.many( "roles", (rr) => [
                // x.appkit.put( rr.$data ),
                rr.items( ( rri, i ) => [
                  a.strong( "Role " + i ),
                  rri.fields( "title", { name: "appointed", type: "date", stringify: "toLocaleDateString" } ),
                ] ),
              ] ),
              // x.appkit.put( data ),
              // a.h5(id),
              // a.label( "First name:" ), '',
              // r.text( { name: "first_name", value: data.first_name } ),
              // a.br,
              // a.label( "Age:" ), '',
              // r.text( { name: "age", value: data.age, type: "number" } ),
              // a.br,
              // a.label( "Joined:" ), '',
              // r.text( {
              //   name: "joined",
              //   value: data.joined,
              //   type: "date",
              //   stringify: {
              //     method: "toLocaleDateString",
              //     // arguments: [
              //     //   { year: 'numeric',
              //     //     month : 'numeric',
              //     //     day : '2-digit' }
              //     // ],
              //   }
              // } ),
              // r.object( { value: data } ),
              // r.media( { value: "data:image/gif;base64,R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0jvb29t/f3//Ub//ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAARe8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcppV0aCcGCmTIHEIUEqjgaORCMxIC6e0CcguWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7" } ),
              // r.media( { value: "https://www.w3schools.com/tags/smiley.gif" } ),
              // r.media( { type: "video", value: "https://www.w3schools.com/tags/movie.mp4" } ),
              // r.media( { type: "audio", value: "https://www.w3schools.com/tags/horse.ogg" } ),
              //
              // r.check( { value: "on", label: "Accepted?" } ),
              //
              // r.list( { value: [ "apple", "banana", "lemon" ] } ),
              // r.list( { value: [ "apple", "banana", "lemon" ], type: "ol" } ),
              // r.list( { value: [ "apple", "banana", "lemon" ], type: "div", item: ( item ) => a.p( a.a( item, { href: item } ) ) } ),
              //
              // r.checkboxes( { value: [ "apple", "banana", "lemon" ], collection: [ "pear", "apple", "kiwi", "banana", "lemon", "orange" ] } ),
              // r.radios( { value: "apple", collection: [ "pear", "apple", "kiwi", "banana", "lemon", "orange" ] } ),

          ], { data: data } )
          }
        } )
      } ),
    ] },
  } ),



  // x.appkit.router( { bind: 'window', root: '/axfunction' } ),
  // x.appkit.widget.clock(),
  // x.md( "My friends\n===" ),
  // a.div( {
  //   $nodes: [
  //     x.btn( '<', function() {
  //       this.$('^ div.fetch').$state--
  //     } ),
  //     x.btn( '>', function() {
  //       this.$('^ div.fetch').$state++
  //     } ),
  //     a['div.fetch']( {
  //       $nodes: function( id ) {
  //         return x.appkit.fetch( `/test/people/${id}`, {
  //           success: function( data ) {
  //             this.$nodes = x.appkit.form( (f) => [
  //               a.h5(id),
  //               f.fields( "first_name", "last_name" ),
  //             ], { data: data } )
  //           }
  //         } )
  //       },
  //       $state: 0
  //     } ),
  //   ],
  // } ),

  // x.appkit.fetch( '/test/people' ),

  // x.appkit.form( (f) => [
  //   f.fields( "first_name", "last_name" ),
  //   a.h1( 'Membership' ),
  //   f.one( "membership", (ff) => [
  //     ff.fields(
  //       { name: "joined", type: "date" },
  //       { name: "renewed", type: "date" }
  //     )
  //   ] ),
  //   a.h1( "Roles" ),
  //   f.many( "roles_attributes", (ff) => [
  //     ff.add( null, { insert: "prepend" } ),
  //     a.hr,
  //     ff.items( ( ffi, i ) => [
  //       a.h3( `Item ${ i == 0 ? '0' : i || ''} - ${ ffi.$data.role || 'new' }` ),
  //       a['.float-right']( ffi.remove() ),
  //       ffi.fields( "role", { name: "appointed", type: "date" } ),
  //       a.hr
  //     ], {
  //       new: function() { return {
  //         appointed: x.appkit.lib.date.now.value()
  //       }
  //     } } )
  //   ], { key: "roles" } ),
  //   // f.field( "name" ),
  //   // f.field( "age", { type: "number" } ),
  //   f.field( "tnc", { hint: "a hint", help: "This is help", as: "check", label: "Terms and conditions", check: { label: "Accept?" } } ),
  //   f.field( "detail", { as: "textarea", dependent: "member[tnc]" } ),
  //   // f.field( {
  //   //   as: "checkboxes",
  //   //   name: "snow",
  //   //   checkboxes: { check: { reverse: true } },
  //   //   collection: [ "ski", "board", "cross country" ],
  //   //   value: "board",
  //   //   required: true,
  //   // } ),
  //   // f.field( {
  //   //   as: "radios",
  //   //   name: "temp",
  //   //   check: { reverse: true },
  //   //   collection: [ "hot", "cold" ],
  //   //   value: "hot",
  //   //   required: true,
  //   //   dependent: { name: "snow" },
  //   // } ),
  //   // f.selectinput( {
  //   //   name: "fizzbuzz",
  //   //   check: { reverse: true },
  //   //   collection: [ "fizz", "buzz" ],
  //   //   value: "buzz",
  //   //   placeholder: "Select one or another",
  //   //   required: true,
  //   // } ),
  //   // f.select( {
  //   //   name: "foobar",
  //   //   check: { reverse: true },
  //   //   collection: [
  //   //     "foo",
  //   //     {
  //   //       label: { $html: "&mdash;&mdash;&mdash;&mdash;&mdash;" },
  //   //       disabled: true
  //   //     },
  //   //     { value: "bar", label: "Bar" }
  //   //   ],
  //   //   value: "bar",
  //   // } ),
  //   f.language( { name: "lang" } ),
  //   // f.country( { name: "ctry" } ),
  //   // f.timezone( { name: "tzone" } ),
  //   // f.richedit( { name: "mdwn", value: "Fred", value: "Stuff" } ),
  //   // x.simplemde.form.markdown( f, { name: "markdn", required: true, value: "Stuff" } ),
  //   // f.input( { name: "first_name", value: "Fred" } ),
  //   // f.input( { name: "pword", value: "aaaaa", type: "password" } ),
  //   // f.password( { name: "pass", value: "we23eds34" } ),
  //   // f.multiselect( { name: "things", value: 1, collection: [ 1,2,3 ] } ),
  //   // f.code( { name: "script", mode: { value: "javascript" } } ),
  //   // f.code( { name: "script2", mode: "shell", modes: false } ),
  //   // f.check( { name: "agree", value: "on", reverse: true, label: x.appkit.icon("fa fa-check") } ),
  //   // f.textarea( { name: "detail", placeholder: "wow" } ),
  //   f.submit()
  // ], {
  //   data: {
  //     first_name: "Lachlan",
  //     last_name: "Douglas",
  //     age: 46,
  //     detail: "Wow!",
  //     membership: {
  //       joined: "2017-11-13",
  //       renewed: "2018-11-13"
  //     },
  //     roles: [
  //       { role: "Greenkeeper" ,appointed: '2017-12-12' },
  //       { role: "Barman" ,appointed: '2017-12-13' },
  //     ]
  //   },
  //   nest: 'member'
  // } ),

  // x.appkit.controller(
  //   {
  //     '/': function( params, controller ) {
  //       return [
  //         x.btn(
  //           "Help",
  //           () => controller.$to("/help"),
  //           { icon: "fa fa-question" }
  //         ),
  //         App.examples.table,
  //       ]
  //     },
  //     '/help': function( params, controller ) {
  //       return x.btn(
  //         "Home",
  //         () => controller.$to("/"),
  //         { icon: "fa fa-home" }
  //       )
  //     },
  //   },
  //   {
  //     bind: "appkit-router",
  //     default: null,
  //     transition: "fade"
  //   }
  // ),
  //
  // a.div( () => [ 0,0,0,0,0 ].map(
  //   () => a['.die']( {
  //     $html: () => `&#${ 9856 + Math.floor( Math.random() * 6 ) };`,
  //     style: {
  //       fontSize: "6em", color: '#' + Math.random().toString().substr(-3)
  //     },
  //     $on: { click: function () { this.$('^.die').$render() } }
  //   } )
  // ) ),
  //
  // a.div(
  //   () => [ 0,0,0,0,0 ].map(
  //     () => a['.die']( { style: {
  //       fontSize: "6em", color: '#' + Math.random().toString().substr(-3) },
  //       $html: `&#${ 9856 + Math.floor( Math.random() * 6 ) };`
  //     } )
  //   ), { $on: { click: function () { this.$render() } } } ),
  //
  // a.div( {
  //   style: { fontSize: '10em', margin: "auto", width: "10px;", cursor: "pointer" },
  //   $on: { click: function () { this.$init() } },
  //   $init: function() {
  //     let roller = setInterval( () => {
  //       this.style.transform = `rotate(${ Math.floor( Math.random() * 360 ) }deg)`;
  //       this.$html = `&#${ 9856 + Math.floor( Math.random() * 6 ) };`
  //     }, 200 )
  //     setTimeout( () => { clearInterval( roller ) }, 1000 )
  //   }
  // } ),
  //
  // a('<hr>'),
  // a.hr(),
  // a.hr,
  // a['hr'],
  // a['hr'](),
  // document.createElement( "hr" ),
  // { $tag: "hr" },
  // { $html: "<hr>" },
  //
  // null, undefined, /.+/, '',
  // [], a['tester'],
  // {},
  //
  // a['div#myID.myclass.myclass2']("hi"),
  //
  //
  // true, false, 0, 1, 2, 3.142,
  // "☺", "☺", "☺", "☺", "☺",
  // { $text: "☺" },
  // { $html: "&#9786;" },
  // document.createTextNode( "☺" ),
  // a( "&#9786;" ),
  // a.span( "☺" ),
  //
  // a("<hr>"),
  //
  // "Text",
  // a("<p><em>HTML</em></p>"),
  // { $tag: "p", $text: "Text in <p>" },
  // { $tag: "div", $html: "<p><em>HTML</em> in &lt;div&gt;</p>" },
  // a.p( "Text in <p>" ),
  // a.div( { $html: "<p><em>HTML</em> in &lt;div&gt;</p>" } ),
  // a.p( {
  //   id: "myId",
  //   class: "my-class-a my-class-b",
  //   $text: 'Text in <p id="myId" class="my-class-a my-class-b">'
  // } ),
  // a["my-custom-tag"]( "Text in <my-custom-tag>" ),
  // a["p.my-class"]( 'Text in <p class="my-class">' ),
  // a["p#myId.my-class-a.my-class-b"]( 'Text in <p id="myId" class="my-class-a my-class-b">' ),
  //
  // { $tag: "hr" },
  //
  // a.form( a.input( { placeholder: "A form with input" } ) ),
  //
  // a['hr'](),
  //
  // a.select(
  //   [ "red", "orange", "yellow", "green", "blue", "indigo", "violet" ].
  //   map( (i) => a.option(i)  ),
  //   {
  //     $on: { change: function() {
  //       this.style.backgroundColor = this.options[ this.selectedIndex ].value }
  //     },
  //     multiple: true, size: 7
  //   }
  // ),
  //
  // a.button( 'Click me', { $on: {
  //   click: function () {
  //     this.$nodes = [ "Clicked", a( '&#10004;' ) ]
  //   },
  // } } ),
  //
  // {
  //   $text: () => Date.now(),
  //   $on: {
  //     mouseover: function () { this.$render() },
  //     mouseleave: function () { setTimeout( () => { this.$render() }, 1000 ) }
  //   },
  // },
  //
  // a.hr(),
  //
  // x.md('**bold**', { inline: true } ),
  //
  // a.hr(),
  //
  // 'Click dice to roll',

  // {
  //   $tag: "h4",
  //   $text: function( person ) {
  //     return `Your name is ${ person.name } and your age is ${ person.age }.`
  //   },
  //   $state: { name: "Lachlan", age: 46 }
  // },
  // { $tag: "p", $html: function( person ) { return `Your name is <strong>${ person.name }</strong> and your age is <em>${ person.age }</em>.` }, $state: { name: "Lachlan", age: 46 } },
  // {
  //   $tag: "p",
  //   $nodes: function( person ) {
  //     return [
  //       [ ( new Date ).toLocaleTimeString() ],
  //       'Your name is ',
  //       a.strong( { $text: ( name ) => name, $state: person.name } ),
  //       ' and your age is ',
  //       a.em( { $text: ( age ) => age, $state: person.age } ),
  //
  //     ]
  //   },
  //   $state: { name: "Lachlan", age: 46 },
  //   $update: function(a,b) {
  //     this.querySelector('strong').$state = this.$state.name
  //     this.querySelector('em').$state = this.$state.age
  //     // return true
  //   }
  // },
  // a.button("Click me", { $on: { click: function () {
  //   this.previousSibling.$state = { name: "Joanna", age: 45 }
  // } } } ),
  // { $html: () => "<h2>!</h2>" },
  // a.h1("Wow", { class: "red" } ),
  // a("dgfdfgfhdhgdh"),
  // a['']("X"),
  // [ "Hello", " ", "World" ],
  // document.createTextNode( "World!"),
  // {
  //   $text: "World",
  //   $on: {
  //     mouseover: function () { this.$change() },
  //     click: function () { this.$change() },
  //   },
  //   $oldTime: Date.now(),
  //   $change: function() {
  //     this.$text = this.$oldTime
  //     this.$oldTime = Date.now()
  //   }
  // },
  // {
  //   $tag: "h4",
  //   $text: function( person ) {
  //     return `Your name is ${ person.name } and your age is ${ person.age }.`
  //   },
  //   $state: { name: "Lachlan", age: 46 }
  // },
  // { $tag: "p", $html: function( person ) { return `Your name is <strong>${ person.name }</strong> and your age is <em>${ person.age }</em>.` }, $state: { name: "Lachlan", age: 46 } },
  // {
  //   $tag: "p",
  //   $nodes: function( person ) {
  //     return [
  //       [ ( new Date ).toLocaleTimeString() ],
  //       'Your name is ',
  //       a.strong( { $text: ( name ) => name, $state: person.name } ),
  //       ' and your age is ',
  //       a.em( { $text: ( age ) => age, $state: person.age } ),
  //
  //     ]
  //   },
  //   $state: { name: "Lachlan", age: 46 },
  //   $update: function(a,b) {
  //     this.querySelector('strong').$state = this.$state.name
  //     this.querySelector('em').$state = this.$state.age
  //     // return true
  //   }
  // },
  // a.button("Click me", { $on: { click: function () {
  //   this.previousSibling.$state = { name: "Joanna", age: 45 }
  // } } } ),
  // { $html: () => "<h2>!</h2>" },
  // a.h1("Wow", { class: "red" } ),
  // a("<hr>"),
  // a("dgfdfgfhdhgdh"),
]
