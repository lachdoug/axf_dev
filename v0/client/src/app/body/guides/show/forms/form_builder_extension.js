App.prototype.guidesShowFormsFormBuilderExtension = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( x.md( "Create forms quickly using the `.form()` extension." ) ),
    a.p( x.md( "Pass `.form()` a function to access the form builder." ) ),
    this.coderunner(
`ax( (a,x) =>
  x.form( (f) => [
    f.input( "score", {
      attributes: {
        name: "points",
        type: "number",
        // required: true
      }
    } ),
    f.input( "like", {
      // invalid: (v) => v.patternMismatch ? "Must be yes" : null,
      attributes: {
        // pattern: "yes",
        // required: true,
        list: "mylist"
      }
    } ),
    f.datalist( [ "yes", "no" ], { attributes: { id: "mylist" } } ),
    f.input( "background", { value: "blue", attributes: { type: "hidden" } } ),
    f.check( "open", {
      value: "on",
      // checked: "
      attributes: {
      	// type: "checkbox"
      }
    } ),
    f.custom(
      "sports",
      "checkboxes",
      { collection: { glf: "Golf", ftb: "Football" } }
    ),
    f.select("choice", {
      placeholder: "Please make a selection",
      collection: { "up": "Go Up", "down": "Go Down" },
      attributes: { required: true }
    } ),
    f.textarea( "detail", {
      attributes: { required: true }
    } ),
    f.input(
      "accept",
      {
        // attributes: { type: "text", pattern: "yes", required: true },
        // invalid: (v) => v.patternMismatch ? "Must be yes" : null,
        value: 42
      }
    ),
    f.input( "score", {
      attributes: {
        name: "points",
        type: "number",
        // required: true
      }
    } ),
    f.input( "like", {
      // invalid: (v) => v.patternMismatch ? "Must be yes" : null,
      attributes: {
        // pattern: "yes",
        // required: true,
        list: "mylist"
      }
    } ),
    f.datalist( [ "yes", "no" ], { attributes: { id: "mylist" } } ),
    f.input( "background", { value: "blue", attributes: { type: "hidden" } } ),
    f.check( "open", {
      value: "on",
      checked: "true",
      attributes: {
        type: "radio",
        checked: true,
      }
    } ),
    f.custom( "source_mode", "codemirrormode" ),
    f.custom( "source", "codemirror" ),
    f.select("choice", {
      placeholder: "Please make a selection",
      collection: { "up": "Go Up", "down": "Go Down", "—————": null, "left": "Go Left" },
      attributes: { required: true }
    } ),
    f.textarea( "detail", {
      attributes: { required: true }
    } ),
    f.input(
      "accept",
      {
        // attributes: { type: "text", pattern: "yes", required: true },
        // invalid: (v) => v.patternMismatch ? "Must be yes" : null,
        value: 42
      }
    ),

    f.submit()
  ] )
);`
    ),
  ];
};
