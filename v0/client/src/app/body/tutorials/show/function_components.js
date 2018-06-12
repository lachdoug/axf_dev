App.prototype.tutorialsShowFunctionComponents = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( [
      a.p( x.md( "A component can be a function that returns other components." ) ),
    ] ),
    this.coderunner(
`ax( function() { return [ "Foo", "Bar"]; } );
ax( () => [ "Bar", "Foo"] ); // with arrow function syntax` ),
  ];
};
