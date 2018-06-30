App.prototype.guidesShowFormsFormBuilderFields = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( x.md( "Create fields using `.fields()` on the form builder." ) ),
    this.coderunner(
`ax( (a,x) =>
  x.form( (f) => [
    f.fields ( [
      "first_name",
      "last_name",
      [ "age", "number" ],
      [ "register", "checkbox" ]
    ] )
  ] )
);`
    ),
  ];
};
