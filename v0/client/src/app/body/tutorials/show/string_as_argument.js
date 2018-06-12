App.prototype.tutorialsShowStringAsArgument = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( [
      a.p( x.md("The `ax()` function accepts two parameters: *components*, *options*") ),
      a.p( [
        "Let's pass a string as a parameter. Click ",
        x.btn( "Run", function() {
          this.closest("view").querySelector("coderunner runbutton button").click();
        }, { fa: "play" } ),
        " to see the result."
      ] ),
    ] ),
    this.coderunner(
`ax( [ "Foo", "Foo", "Foo", [ "Bar" ], [ "Bar" ], [ "Bar" ] ] ); ax( "Hello world", { style: "color: red;" } );` ),
  ];
};
