AxFrameworkExtensionsFormBuilderCustomFields.prototype.checkboxes = function(
	name,
	options
) {

  var a = this.axFramework.tags;
	var x = this.axFramework.extensions;
  var f = this.formBuilder;

	name = x.lib.fieldNameForCollection( name );
	options.value = x.lib.fieldValueForCollection( options.value );
	options.collection = x.lib.fieldCollectionFrom( options.collection || { "on": "On" } );

	var components = options.collection.map( function( checkbox, i ) {

		var checkOptions = options.check || {};
		if ( typeof checkOptions === "function" ) {
			checkOptions = checkOptions( checkbox, i, options.collection )
		};

		var labelOptions = checkOptions.label;
		if ( labelOptions !== false ) {
			if ( labelOptions === undefined ) {
				labelOptions = { text: checkbox[1], layout: "check" };
			} else {
				labelOptions = Object.assign(
					{ text: checkbox[1], layout: "check" },
					labelOptions
				);
			};
		};
// debugger
		labelOptions.leftwrapper = Object.assign(
			{},
			options.leftwrapper,
			checkOptions.leftwrapper || {},
			labelOptions.leftwrapper || {}
		);

		labelOptions.rightwrapper = Object.assign(
			{},
			options.rightwrapper,
			checkOptions.rightwrapper || {},
			labelOptions.rightwrapper || {}
		);


		checkOptions = Object.assign(
			{
				value: x.lib.arrayIncludes( options.value, checkbox[0] ) ? checkbox[0] : "",
				checked: checkbox[0],
				required: options.required,
			},
			checkOptions || {}
		);

		checkOptions.attributes =  Object.assign(
			{
				_dependentValue: function () {
					return this.closest("checkboxes")._dependentValue();
				},
				_labelOnclick: function () { return true; },
			},
			( checkOptions.input || {} ).attributes || {}
		);


		var check = f.check( name, checkOptions );
// debugger
		var outerwrapperOptions = {
			hint: checkOptions.hint,
		  help: checkOptions.help,
			// input:
			label: labelOptions,
			attributes: checkOptions.outerwrapper
		};

		return a.checkbox( f.outerwrapper( name, check, outerwrapperOptions ) );

	} );

  return a.checkboxes( components, {

		_labelOnclick: function (e) {
			if ( e.target.closest("checkbox") ) {
				var input = e.target.closest("checkbox").querySelector("input");
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
				var first = this.querySelectorAll("checkboxes input:enabled")[0];
				first && first.focus();
				return false;
			};
		},

    _dependentValue: function() {
			result = [];
			var checked = this.querySelectorAll('input:checked');
      for ( var i in checked ) {
				result.push( checked[i].value );
			};
			return result.join(" ");
    },

  } );

};
