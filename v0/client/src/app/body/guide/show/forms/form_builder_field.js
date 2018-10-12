App.prototype.guideShowFormsFormBuilderField = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( x.md( "Create a field using `.field()` on the form builder." ) ),
    this.coderunner(
`ax( (a,x) =>
  x.form( (f) => [
    f.field( "tries", "number", "4" ), // Default value is 4
    f.field( "score", "number", "41" ), // Default value 41 overwritten by form data 42
    f.field( "final", "number", {
      input: { value: "41" } // Form data 40 overwritten by attributes.value 41
    } ),
  ], { data: { score: 42, final: 40 } } )
);`
    ),
  ];
};
