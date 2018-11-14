App.prototype.header = function() {

  var a = this.a;
  var x = this.x;

  return x.controller( {
    "*path": this.header.nav( this ),
  }, {
    bind: ".router",
    // transition: x.appkit.transitions.fade,
    // in: x.appkit.lib.fadeIn,
  } );

};
