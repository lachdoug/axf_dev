App.prototype.guidesShowIndexResource = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( [
      a.p( x.md( "Index a resource using the `.index()` extension." ) ),
    ] ),
    this.coderunner(
`ax( (a,x) => [
  x.index( "/test/people", [ "first_name", "last_name" ] )
] );`
    ),
  ];
};
