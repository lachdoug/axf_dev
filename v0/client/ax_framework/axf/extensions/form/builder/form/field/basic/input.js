// Options
// attributes - <input> tag attributes
// value - field value
// invalid - Custom message, shown when invalid, can be string or function(validity)

AxFrameworkExtensionsFormBuilder.prototype.input = function(
	name,
 	options={}
) {

	var a = this.axFramework.tags;

	// options.input = options.input || {}
	// options.input.type = inputType;
	// if ( inputType === "checkbox" || inputType === "radio") {
	//
	// 	var fieldValue = options.value;
	// 	options.value = options.checkedValue || "on";
	//
	// 	if ( fieldValue &&
	// 		( fieldValue.toString() == options.value.toString() )
	// 	) {
	// 		options.checked = true;
	// 	};
	// 	if ( options.reverse === undefined ) {
	// 		options.reverse = true;
	// 	};
	//
	// } else if ( inputType === "hidden" && options.label === undefined ) {
	//
	// 	options.label = false;
	//
	// };

	// var id = options.id || axNextUniqueId();

// debugger

	var attributes = Object.assign(
		{
			name: name,
			value: options.value,
			type: options.type,
			// id: options.id,
			pattern: options.pattern,
			required: options.required,
			readonly: options.readonly,
			disabled: options.disabled,
			// maxlength: options.maxlength,

			_labelOnclick: function(e) {
				// debugger;
				var input = this.querySelector("input");
				if ( e.target === input ) {
					return true;
				} else {
					input.focus();
					return false;
				};


				// closest("wrapper").querySelector("input").focus();
			},

			// _dependentValue is used by dependent fields feature
	    _dependentValue: function() {
	      return this.value;
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
