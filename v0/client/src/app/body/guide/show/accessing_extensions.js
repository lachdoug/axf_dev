App.prototype.guideShowAccessingExtensions = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( [
      a.p( "Pass a function as an argument." ),
    ] ),
    this.coderunner(
`AxFunction.Extensions.prototype.clock = function() {
  return this.a.clock(
    this.a.output( null, {
      _date: 0,
      $update: function() { this.$text = this._date.toLocaleTimeString(); }
    } ),
    {
      $init: function() { this._refresh(); setInterval( this._refresh, 1000); },
      _refresh: function () { this.$('output')[0]._date = new Date(); },
    }
  );
};

ax( (a,x) => a.h1( x.clock() ) );
` ),
  ];
};
