AxFrameworkExtensionsFormBuilderCustomFields.prototype.radiobuttons = function(
	name,
	options={}
) {

  var a = this.axFramework.tags;
	var x = this.axFramework.extensions;
  var f = this.formBuilder;

	options.collection = x.lib.fieldCollectionFrom( options.collection || { "on": "On" } );

	var components = options.collection.map( function( radiobutton, i ) {

		var checkOptions = options.check;
		if ( typeof checkOptions === "function" ) {
			checkOptions = checkOptions( radiobutton, i, options.collection )
		};
		// debugger

		var labelOptions = checkOptions.label;
		if ( labelOptions !== false ) {
			if ( labelOptions === undefined ) {
				labelOptions = { text: radiobutton[1], layout: "check" };
			} else {
				labelOptions = Object.assign(
					{ text: radiobutton[1], layout: "check" },
					labelOptions
				);
			};
		};
// debugger
		checkOptions = Object.assign(
			{
				type: "radio",
				value: options.value,
				checked: radiobutton[0],
				required: options.required,
			},
			checkOptions || {}
		);

		checkOptions.attributes =  Object.assign(
			{
				_dependentValue: function () {
					return this.closest("radiobuttons")._dependentValue();
				},
				_labelOnclick: function () { return true; },
			},
			( checkOptions.input || {} ).attributes || {}
		);
// debugger
		var check = f.check( name, checkOptions );


// debugger;
		var outerwrapperOptions = Object.assign(
			{
				hint: checkOptions.hint,
			  help: checkOptions.help,
				// input:
				label: labelOptions,
				attributes: checkOptions.outerwrapper,
			},

		);

		return a.radiobutton( f.outerwrapper( name, check, outerwrapperOptions ) );

	} );

  return a.radiobuttons( components, {

		_labelOnclick: function (e) {
			// debugger
			if ( e.target.closest("radiobutton") ) {
				var input = e.target.closest("radiobutton").querySelector("input");
				if ( e.target.closest("helpbutton") || e.target.closest("helpbody") ) {
					input.focus();
					return false;
				} else if ( e.target === input ) {
					return true;
				} else {
					input.click();
					return false;
				};
			} else {
				var first = this.querySelectorAll("radiobuttons input:enabled")[0];
				first && first.focus();
				return false;
			};
		},

    _dependentValue: function() {
			var selected = this.querySelector('input:checked');
			return selected ? selected.value : null;
    },

  } );

};
