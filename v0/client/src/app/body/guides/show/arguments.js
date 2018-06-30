App.prototype.guidesShowArguments = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( x.md( "The `ax()` function accepts two arguments: ***components*** and ***attributes***." ) ),
    a.p( x.md( "Components can be combinations of strings, numbers, objects, nulls, functions, classes, and arrays." ) ),
    a.p( x.md( "Components are mapped to Cell objects and, in turn, new elements in the DOM." ) ),
    a.p( x.md( "New elements are normally appended to the `<body>`. If a new element has the same `#id` as an exsting element, the new element will replace the existing element." ) ),
    a.p( x.md( "Arrays get `<div>` tags when a tag type is not specified." ) ),
    a.p( x.md( "The values in the attributes argument are mapped to their matching attributes on the element." ) ),
    this.coderunner(
`ax(
  [ "foo", "foo", [ "bar" ], [ "bar" ] ], // components
  { style: "font-size: 2em;" }            // attributes
);` ),
  ];
};
