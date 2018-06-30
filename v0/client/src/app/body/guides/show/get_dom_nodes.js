App.prototype.guidesShowGetDomNodes = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( [
      a.p( "Get nodes using document queries, or directly by id."),
    ] ),
    this.coderunner(
`ax( null, { id: "greet", style: "color: red;" } );
ax( null, { $init: function () { greet.$text = "Hi" } } );` ),
  ];



};
