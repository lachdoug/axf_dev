App.prototype.guideShowFormsFieldTypes = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( x.md( "An assortment of field types." ) ),
    this.coderunner(
`ax( (a,x) => [
  x.script( "/axf/themes/basic.js" ),
  x.css(
    { maxWidth: "600px", marginLeft: "auto", marginRight: "auto", marginTop: "20px" },
    { scope: "#myform" }
  ),
  x.form( (f) => [
    f.fields(
      [
        [ "pet", "checkboxes", {
          collection: [ "dog", "cat", "fish", "bird" ],
          tag: { class: "form-check-input" },
          wrapper: { tag: { class: "form-check form-group" } },
        } ],
        [ "script_mode", "codemode", { value: "javascript" } ],
        [ "script", "code" ],
        [ "file", "file", { tag: { class: "" } } ],
        [ "accept", "checkbox", {
          tag: { class: "form-check-input" },
          wrapper: { tag: { class: "form-check form-group" } }
        } ],
        [ "scale", "custom/inputoutput", 10, { type: "range", tag: { min: 1, class: "form-control-range" } } ],
        [ "sports", "custom/selectinput", { placeholder: "", collection: { glf: "Golf", ftb: "Football" } } ],
        [ "accepters", "multiselect", { value: [1,2], collection: { 1: "Red", 2: "Blue", 3: "Green" } } ],
        [ "email", "email", { tag: { placeholder: "name@example.com" } } ],
        [ "birthday", "date", { help: "Ask your mother. She'll remember." } ],
        "first_name",
        "last_name",
        [ "description", "markdown", { required: true } ],
      ],
      {
        tag: { class: "form-control" },
        wrapper: { tag: { class: "form-group" } }
      }
    ),
    f.submit()
  ], { tag: { id: "myform" } } )
] );`
    ),
  ];
};
