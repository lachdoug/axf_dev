// options.target - querySelector to find codemirror field on form. Default is 'codemirror'
// options.attributes - for <select> tag

AxFrameworkExtensionsFormBuilderCustomFields.prototype.codemirrormode = function(
	name,
	options
) {

  // var a = this.axFramework.tags;
  var f = this.formBuilder;

	var modes = Object.keys( CodeMirror.modes );
	modes[0] = ""; // replace null

	var selectOptions = ( options.input || {} );

	selectOptions.value = selectOptions.value || options.value;
	selectOptions.collection = modes;
	selectOptions.attributes = Object.assign (
		{
			$init: function () { this._setMode(); },
			onchange: function (e) { e.target._setMode(); },
			_setMode: function () {
				this.closest("form").
					querySelector( options.target || "codemirror" ).
					_setMode( this.value );
			},
		},
		selectOptions.attributes || {}
	);
// debugger
  return f.select(
		name,
		selectOptions
  );

};
