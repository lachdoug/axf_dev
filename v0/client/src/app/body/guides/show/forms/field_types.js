App.prototype.guidesShowFormsFieldTypes = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( x.md( "An assortment of field types." ) ),
    this.coderunner(
`ax( (a,x) => [
  x.script( "/axf/themes/standard/form.js" ),
  x.css(
    { maxWidth: "600px", marginLeft: "auto", marginRight: "auto", marginTop: "20px" },
    { scope: "#myform" }
  ),
  x.form( (f) => [
    f.fields(
      [
        [ "pet", "checkboxes", {
          collection: [ "dog", "cat", "fish", "bird" ],
          attributes: { class: "form-check-input" },
          wrapper: { attributes: { class: "form-check form-group" } },
        } ],
        [ "script_mode", "codemode", { value: "javascript" } ],
        [ "script", "code" ],
        [ "file", "file", { attributes: { class: "" } } ],
        [ "accept", "checkbox", {
          attributes: { class: "form-check-input" },
          wrapper: { attributes: { class: "form-check form-group" } }
        } ],
        [ "scale", "custom/inputoutput", 10, { type: "range", attributes: { min: 1, class: "form-control-range" } } ],
        [ "sports", "custom/selectinput", { placeholder: "", collection: { glf: "Golf", ftb: "Football" } } ],
        [ "accepters", "multiselect", { value: [1,2], collection: { 1: "Red", 2: "Blue", 3: "Green" } } ],
        [ "email", "email", { attributes: { placeholder: "name@example.com" } } ],
        [ "birthday", "date", { help: "Ask your mother. She'll remember." } ],
        "first_name",
        "last_name",
        [ "description", "markdown", { required: true } ],
      ],
      {
        attributes: { class: "form-control" },
        wrapper: { attributes: { class: "form-group" } }
      }
    ),
    f.submit()
  ], { attributes: { id: "myform" } } )
] );`
    ),
  ];
};
