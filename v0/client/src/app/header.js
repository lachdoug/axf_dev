App.prototype.header = function() {

  var a = this.a;
  var x = this.x;

  return x.controller( {
    "*path": this.headerNav(a,x),
  }, { bind: "router", id: "navController" } );

};
