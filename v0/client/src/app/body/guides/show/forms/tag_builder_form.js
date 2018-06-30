App.prototype.guidesShowFormsTagBuilderForm = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( x.md( "Build a form from scratch using the tag builder." ) ),
    this.coderunner(
`ax( (a,x) =>
  a.form( [
    a.label( [
      "First name",
      a.input( null, { name: "first_name" } )
    ] ),
    a.label( "Last name" ),
    a.input( null, { name: "last_name" } ),
    a.label( [
      a.input( null, { name: "register", type: "checkbox" } ),
      "Register"
    ] ),
  	a.button( "Submit" )
  ], { method: "POST" } )
);`
    ),
  ];
};
