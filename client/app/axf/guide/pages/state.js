app.axf.guide.pages.state = (c) => (a,x) => [

  a.h1("The Ax Function"),
  app.btn( "Guide", () => c.open('/guide/hello_world'), "link" ),
  x.md ( "`ax()` is a tool for developing client-side web applications, user interfaces and dynamic content." ),
  app.coderunner(
  `ax( (a,x) => [
    a( "<h1>I <blink>&hearts;</blink> HTML 1.0</h1>" ),
    a.strong( "Here's a tag!" ),
    a.p( [
      a.em( "“class free object-oriented programming is JavaScript's gift to humanity”" ),
      a("&mdash;"),
      a.a( "Douglas Crockford", {
        href: "https://frontendmasters.com/courses/good-parts-javascript-web/evolution-of-inheritance/",
        target: "frontendmasters"
      } )
    ] ),
    a.hr(),
    x.appkit.time( { local: true } ),
    x.md( [
      "Extensions add functionality to \`ax()\`.",
      "This is **markdown**. Other extensions support libraries for " +
        "css, forms, icons, charts and more."
    ] ),
    x.appkit.document.css( { body: { padding: "10px" }, field: { input: { margin: "5px" } } } ),
    x.appkit.document.css( \`
      blink { animation: blink-animation 1s steps(5, start) infinite;
            -webkit-animation: blink-animation 1s steps(5, start) infinite; }
      @keyframes blink-animation { to { visibility: hidden; } }
      @-webkit-keyframes blink-animation { to { visibility: hidden; } }
    \` ),
    a.div( [
      a.a( "Cell", { href: "https://www.celljs.org", target: "cell" } ),
      " looks after the DOM."
    ] ),
    { _num: 0,
       _up: function() { this._num++ },
       $init: function() { this._up() },
       $update: function() {
        this.$text = this._num;
        setTimeout( () => { this._up() }, 1000 );
       }
    },
    x.appkit.form( (f) => [ f.field( { key: 'name', label: x.appkit.icon( "fa fa-pencil" ) } ), f.submit( "OK" ) ] ),
    x.chart( { type: 'line', data: {
      datasets: [ { data: [ 0, 1 ], label: "Chart.js rocks!" } ]
    } } )
  ] );` ),


]
