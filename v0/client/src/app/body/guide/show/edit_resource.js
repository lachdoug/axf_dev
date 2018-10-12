App.prototype.guideShowEditResource = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( [
      a.p( x.md( "Edit a resource using the `.edit()` extension." ) ),
    ] ),
    this.coderunner(
`ax( (a,x) => [
  x.edit( "/test/people/1", [ "first_name", "last_name", [ "age", "number" ], [ "registered", "checkbox" ] ] )
] );`
    ),
  ];
};
