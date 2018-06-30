AxFrameworkExtensions.prototype.marked = function ( content, options ) {
	var a = this.a;
  return a.markdown( null, { $html: marked( content ) } );
};
AxFrameworkExtensions.prototype.md = AxFrameworkExtensions.prototype.marked
