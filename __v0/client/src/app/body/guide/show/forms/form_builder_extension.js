App.prototype.guideShowFormsFormBuilderExtension = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( x.md( "Create forms quickly using the `.form()` extension." ) ),
    a.p( x.md( "Pass `.form()` a function to access the form builder." ) ),
    this.coderunner(
`ax( (a,x) =>
  x.form( (f) => [
    f.input( "score", {
      tag: {
        name: "points",
        type: "number",
        // required: true
      }
    } ),
    f.input( "like", {
      // invalid: (v) => v.patternMismatch ? "Must be yes" : null,
      tag: {
        // pattern: "yes",
        // required: true,
        list: "mylist"
      }
    } ),
    f.datalist( [ "yes", "no" ], { tag: { id: "mylist" } } ),
    f.input( "background", { value: "blue", tag: { type: "hidden" } } ),
    f.check( "open", {
      value: "on",
      // checked: "
      tag: {
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
      tag: { required: true }
    } ),
    f.textarea( "detail", {
      tag: { required: true }
    } ),
    f.input(
      "accept",
      {
        // tag: { type: "text", pattern: "yes", required: true },
        // invalid: (v) => v.patternMismatch ? "Must be yes" : null,
        value: 42
      }
    ),
    f.input( "score", {
      tag: {
        name: "points",
        type: "number",
        // required: true
      }
    } ),
    f.input( "like", {
      // invalid: (v) => v.patternMismatch ? "Must be yes" : null,
      tag: {
        // pattern: "yes",
        // required: true,
        list: "mylist"
      }
    } ),
    f.datalist( [ "yes", "no" ], { tag: { id: "mylist" } } ),
    f.input( "background", { value: "blue", tag: { type: "hidden" } } ),
    f.check( "open", {
      value: "on",
      checked: "true",
      tag: {
        type: "radio",
        checked: true,
      }
    } ),
    f.custom( "source_mode", "codemirrormode" ),
    f.custom( "source", "codemirror" ),
    f.select("choice", {
      placeholder: "Please make a selection",
      collection: { "up": "Go Up", "down": "Go Down", "—————": null, "left": "Go Left" },
      tag: { required: true }
    } ),
    f.textarea( "detail", {
      tag: { required: true }
    } ),
    f.input(
      "accept",
      {
        // tag: { type: "text", pattern: "yes", required: true },
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
