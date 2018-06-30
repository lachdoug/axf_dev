App.prototype.guidesShowTagBuilder = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( [
      a.p( x.md( "When a function is provided as a component, Ax will resolve it by passing a **tag builder**. It is an Ax convention to give the name `a` to the tag builder argument." ) ),
      a.p( x.md( "The tag builder supports methods for creating arbitrary HTML tags. For example: `.h1()` produces an `<h1>` tag; and `.mytag()` produces `<mytag>`." ) ),
      a.p( x.md( "Tag builder methods accept the same two arguments as the `ax()` function, being ***components*** and ***attributes***." ) ),
    ] ),
    this.coderunner(
`ax( (a) => [
  a.h1( "Fizz", { style: "border-bottom: 1px solid red;" } ),
  a.p( "Buzz" )
], { style: "color: blue;" } );` ),
  ];
};
