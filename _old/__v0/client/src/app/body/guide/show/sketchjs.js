App.prototype.guideShowSketchjs = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    x.md( [
      "Sketch.js"
    ] ),
    this.coderunner(
`ax( (a,x) => [
  x.sketchjs( {
    setup: function() {
      this.r, this.g, this.b = 68, 136, 221;
    },
    mousemove: function() {
      this.r = 255 * (this.mouse.x / this.width)
      this.g = 255 * (this.mouse.y / this.height)
      this.b = 255 * abs(cos(PI * this.mouse.y / this.width))
    },
    draw: function() {
      this.fillStyle = \`rgb(\${~~this.r},\${~~this.g},\${~~this.b})\`
      this.fillRect(0, 0, this.width, this.height)
    }
  }, { attributes: { style: "display: block; margin: 20px;" } } )

] );` ),
  ];
};
