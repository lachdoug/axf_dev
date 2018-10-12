App.prototype.guideShowArguments = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    x.md( [
      "The `ax()` function accepts two arguments: ***components*** and ***options***.",
      "***options.attributes*** is applied to the outer element, with key/value pairs mapped to tag attributes."
    ] ),
    this.coderunner(
`ax(
  [ "foo", "foo", [ "bar" ], [ "bar" ] ],       // components
  { tag: { style: "font-size: 2em;" } }  // options
);` ),
  ];
};
