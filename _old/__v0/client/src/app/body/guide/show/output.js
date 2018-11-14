App.prototype.guideShowOutput = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    x.md( [
      "The output object from an `ax()` function is written to a variable (in global context). The output object will normall have a $cell property.",
      "Output from `ax()` functions are written to variables with the prefix `$ax_` followed by an incrementing number. To use a specific variable name, set `options.name`.",
      "New elements are normally appended to the `<body>`. If a new element has the same `#id` as an exsting element, the new element will replace the existing element.",
      "If an `ax()` function is used to perform logic that does not have view output and you do not want a cell object created, set `options.cell` to `false` to stop the object being written to the DOM.",
      "Arrays get `<div>` tags when a tag type is not specified. Specify a tag type by setting `options.attributes.$type`.",
      "The ***attributes*** argument is applied to the element, with key/value pairs mapped to tag attributes."
    ] ),
    this.coderunner(
`ax(
  [ "foo", "foo", [ "bar" ], [ "bar" ] ],       // components
  { tag: { style: "font-size: 2em;" } }  // attributes
);` ),
  ];
};
