App.prototype.bodyRoot = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return ( params, controller ) => [
    a.p( "Ax is a client-side javascript web application framework for building dynamic content and user interfaces." ),
    a.p( [
      "Ax uses ",
      a.a( "Cell", { href: "https://github.com/intercellular/cell", target: "https://github.com/intercellular/cell"} ),
      " and its ingenious approach to creating active document components. ",
      "Ax is essentially a set of helper functions that output objects to Cell."
    ] ),
    this.coderunner(
`ax( (a,x) => [
  a.h3( "Welcome to Ax" ),
  a.hr(),
  x.css( { field: { label: { marginRight: "5px" } } } ),
  x.form( (f) => [ f.field( "detail" ), f.field( "locked", "checkbox" ) ] ),
  x.markdown( "Check out the **tutorials**." )
] );` ),
  ]
};
