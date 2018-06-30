App.prototype.guidesShowCellAttributes = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return this.coderunner(
`ax(
  { $text: "Hello world", style: "background-color: white; font-size: 2em;" },
  { style: "background-color: skyblue; padding: 20px; display: block; text-align: center;" }
);`
  );
};
