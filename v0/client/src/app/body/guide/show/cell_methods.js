App.prototype.guideShowCellMethods = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( [
      a.p( "Define methods on an element by setting an attribute as a function."),
      a.p( "As with data properties, the Cell convention is to give custom methods an underscored attribute name." ),
      a.p( "Element event attributes can be assigned event handlers." ),
    ] ),
    this.coderunner(
`ax( [ "Point at me" ], {
  _set: function( text ) { this.$text = text }, // underscore prefix is preferred
  $set: function( text ) { this.$text = text }, // with $ prefix
  set: function( text ) { this.$text = text },  // without prefix
  onmouseover: function() { this._set( "Click me" ) },
  onclick: function() { this.$set( "Point somewhere else" ) },
  onmouseleave: function() { this.set( "Point at me again" ) },
} );` ),
  ];



};
