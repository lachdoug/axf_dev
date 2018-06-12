App.prototype.footer = function() {

  var a = this.a;
  var x = this.x;

  return a.footer(
    [
  		a.a( "Github", { href: "https://github.com/engines/Ax", target: "https://github.com/engines/Ax" } ),
  	],
    { style: "text-align: center;"}
  );

};
