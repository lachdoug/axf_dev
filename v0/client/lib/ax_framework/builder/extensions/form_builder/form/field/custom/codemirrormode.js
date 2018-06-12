AxBuilderExtensionsFormCustomFieldBuilder.prototype.codemirrormode = function(
	name,
	options
) {

  // var a = this.cellBuilder.tagBuilder;
  var f = this.formBuilder;

	var modes = Object.keys( CodeMirror.modes );
	modes[0] = ""; // replace null

	options = Object.assign( {
		collection: modes,
		select: {
			$init: function () {
				// debugger;
				this._setMode();
			},
			onchange: function (e) {
				e.target._setMode();
			},
			_setMode: function () {
				this.closest("form").querySelector( options.target )._setMode( this.value );
			},
		}
	}, options );

  return f.select(
		name,
		options
  );

};
