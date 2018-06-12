App.prototype.tutorialsShowCellData = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( [
      a.p( "Define data on an element with an underscored attribute name." ),
      a.p( x.md( "Cell will call `$update()` when the data changes." ) ),
    ] ),
    this.coderunner(
`ax( "Click me", {
  _num: 0,
  onclick: function() { this._num++ },
  $update: function () { this.$text = "Keep clicking " + this._num }
} );` ),
  ];



};
