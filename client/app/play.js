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

  x.appkit.router( { bind: 'window', root: '/axfunction' } ),
  // x.appkit.widget.time(),
  // x.md( "aaa\n===" ),
  // x.appkit.fetch( '/test/people' ),

  x.appkit.form( (f) => {
    // debugger
return [
    // f.selectinput( {
    //   name: "fizzbuzz",
    //   check: { reverse: true },
    //   collection: [ "fizz", "buzz" ],
    //   value: "buzz",
    //   placeholder: "Select one or another",
    //   required: true,
    // } ),
    // f.select( {
    //   name: "foobar",
    //   check: { reverse: true },
    //   collection: [
    //     "foo",
    //     {
    //       label: { $html: "&mdash;&mdash;&mdash;&mdash;&mdash;" },
    //       disabled: true
    //     },
    //     { value: "bar", label: "Bar" }
    //   ],
    //   value: "bar",
    // } ),
    // f.language( { name: "lang" } ),
    // f.country( { name: "ctry" } ),
    // f.timezone( { name: "tzone" } ),
    // f.richedit( { name: "mdwn", value: "Fred", value: "Stuff" } ),
    // x.simplemde.form.markdown( f, { name: "markdn", required: true, value: "Stuff" } ),
    // f.input( { name: "first_name", value: "Fred" } ),
    // f.input( { name: "pword", value: "aaaaa", type: "password" } ),
    f.password( { name: "pass", value: "we23eds34" } ),
    // f.multiselect( { name: "things", value: 1, collection: [ 1,2,3 ] } ),
    // f.code( { name: "script", mode: { value: "javascript" } } ),
    // f.code( { name: "script2", mode: "shell", modes: false } ),
    // f.check( { name: "agree", value: "on", reverse: true, label: x.appkit.icon("fa fa-check") } ),
    // f.textarea( { name: "detail", placeholder: "wow" } ),
    f.submit()
  ] }, { object: { name: "Fred", detail: "Wow!" } } ),

  x.appkit.controller(
    {
      '/': function( params, controller ) {
        return [
          x.btn(
            "Help",
            () => controller.$to("/help"),
            { icon: "fa fa-question" }
          ),
          App.examples.table,
        ]
      },
      '/help': function( params, controller ) {
        return x.btn(
          "Home",
          () => controller.$to("/"),
          { icon: "fa fa-home" }
        )
      },
    },
    {
      bind: "appkit-router",
      default: null,
      transition: "fade"
    }
  ),

  a.div(
    () => [ 0,0,0,0,0 ].map(
      () => a['.die']( { $nodes: () => [
          a.span( {
            $html: `&#${ 9856 + Math.floor( Math.random() * 6 ) };`,
            style: {
              fontSize: "6em", color: '#' + Math.random().toString().substr(-3)
            }
          } ),
          a.button( "Roll", { $on: { click: function () { this.closest('.die').$render() } } } )
        ]
      } )
    ) ),

  a.div(
    () => [ 0,0,0,0,0 ].map(
      () => a['.die']( { style: {
        fontSize: "6em", color: '#' + Math.random().toString().substr(-3) },
        $html: `&#${ 9856 + Math.floor( Math.random() * 6 ) };`
      } )
    ), { $on: { click: function () { this.$render() } } } ),

  a.div( {
    style: { fontSize: '10em', margin: "auto", width: "10px;", cursor: "pointer" },
    $on: { click: function () { this.$init() } },
    $init: function() {
      let roller = setInterval( () => {
        this.style.transform = `rotate(${ Math.floor( Math.random() * 360 ) }deg)`;
        this.$html = `&#${ 9856 + Math.floor( Math.random() * 6 ) };`
      }, 200 )
      setTimeout( () => { clearInterval( roller ) }, 1000 )
    }
  } ),
  //
  a('<hr>'),
  a.hr(),
  a.hr,
  a['hr'],
  a['hr'](),
  document.createElement( "hr" ),
  { $tag: "hr" },
  { $html: "<hr>" },
  //
  // null, undefined, /.+/, '',
  // [], a['tester'],
  // {},
  //
  // a['div#myID.myclass.myclass2']("hi"),
  //
  //
  true, false, 0, 1, 2, 3.142,
  "☺", "☺", "☺", "☺", "☺",
  { $text: "☺" },
  { $html: "&#9786;" },
  document.createTextNode( "☺" ),
  a( "&#9786;" ),
  a.span( "☺" ),
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
