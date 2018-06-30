// Options
// attributes - <input> tag attributes
// value - value
// checked - value when checked
// invalid - Custom message, shown when invalid, can be string or function(validity)

AxFrameworkExtensionsFormBuilder.prototype.check = function(
	name,
 	options={}
) {

	var a = this.axFramework.tags;

	var value = options.value;
	var checkedValue = options.checked || "on";
	var checked;
// debugger;
	if ( value && ( value.toString() == checkedValue.toString() )
	) {
		checked = true;
	};

		// if ( options.reverse === undefined ) {
		// 	options.reverse = true;
		// };

	var attributes = Object.assign(
		{
			name: name,
			type: options.type || "checkbox",
			id: options.id,
			value: checkedValue,
			checked: checked,
			required: options.required,
			readonly: options.readonly,
			disabled: options.disabled,
			// _dependentValue is used by dependent fields feature
	    _dependentValue: function() {
	      return this.value;
			},

			_labelOnclick: function(e) {

				var input = this.querySelector("input");
				if ( e.target.closest("helpbutton") || e.target.closest("helpbody") ) {
					input.focus();
					return false;
				} else if ( e.target === input ) {
					return true;
				} else {
					input.click();
					return false;
				};

			},

			$init: function () { this._checkValidity(); },
			oninput: function(e) {
				if ( this._checkValidity() && this.closest("field") ) {
					this.closest("field")._fieldChanged();
				};
			},
			_checkValidity: function() {
				this.setCustomValidity('');
				if(this.validity.valid) {
					return true;
				} else {
					if ( options.invalid ) {
						if ( typeof options.invalid === "string" ) {
							this.setCustomValidity( options.invalid );
						} else {
							var invalidMessage = options.invalid( this.validity );
							if ( invalidMessage ) {
								this.setCustomValidity( invalidMessage );
							};
						};
					};
					return false;
			  };
			},
	  },
		options.attributes || {}
	);

	// debugger

	// // Build gene
	// if ( options.datalist ) {
	// 	var datalistId = attributes.id + "_datalist";
	// 	attributes.list = datalistId;
	// 	var datalistContent = options.datalist.map( function ( datalistOption ) {
	// 		return a.option( null, { value: datalistOption } );
	// 	} );
	// 	return a.inputdatalist([
	// 		a.input( null, attributes ),
	// 		a.datalist( datalistContent, { id: datalistId } )
	// 	] );
	// } else if ( options.uncheckedValue ) {
	// 	var uncheckedGeneOptions = {
	// 		type: "hidden",
	// 		name: attributes.name,
	// 		value: options.uncheckedValue
	// 	};
	// 	return a.checkedinput([
	// 		a.input( null, uncheckedGeneOptions ),
	// 		a.input( null, attributes )
	// 	] );
	// } else {
	// 	return a.input( null, attributes );
	// };

	return a.input( null, attributes );

};
