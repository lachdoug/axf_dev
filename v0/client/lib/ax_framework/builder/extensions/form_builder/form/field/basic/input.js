AxBuilderExtensionsFormBuilder.prototype.input = function(
	name,
	secondaryTypeKey,
	options = {} ) {

	var a = this.cellBuilder.tagBuilder;

	options.input = options.input || {}
	options.input.type = secondaryTypeKey;
	if ( secondaryTypeKey === "checkbox" || secondaryTypeKey === "radio") {

		var fieldValue = options.value;
		options.value = options.checkedValue || "on";

		if ( fieldValue &&
			( fieldValue.toString() == options.value.toString() )
		) {
			options.checked = true;
		};
		if ( options.reverse === undefined ) {
			options.reverse = true;
		};

	} else if ( secondaryTypeKey === "hidden" && options.label === undefined ) {

		options.label = false;

	};

	var id = options.id || axNextUniqueId();

	var attributes = Object.assign(
		{
			name: name,
			id: id,
			value: options.value,
			pattern: options.pattern,
			checked: options.checked,
			required: options.required,
			// _dependentValue is used by dependent fields feature
	    _dependentValue: function() {
	      return this.value;
			},

			$init: function () { this._checkPatternValidity(); },
			oninput: function(e) {
				this._checkPatternValidity() &&
				this.closest("field")._fieldChanged();
			},
			_checkPatternValidity: function() {
				if(this.validity.patternMismatch) {
					// debugger;
					this.setCustomValidity(
						options.invalid || ( 'Must match ' + attributes.pattern )
					);
					return false;
				} else {
          this.setCustomValidity('')
					return true;
			  };
			},
	  },
		( options.input || {} )
	);

	// Build gene
	if ( options.datalist ) {
		var datalistId = attributes.id + "_datalist";
		attributes.list = datalistId;
		var datalistContent = options.datalist.map( function ( datalistOption ) {
			return a.option( null, { value: datalistOption } );
		} );
		return a.inputdatalist([
			a.input( null, attributes ),
			a.datalist( datalistContent, { id: datalistId } )
		] );
	} else if ( options.uncheckedValue ) {
		var uncheckedGeneOptions = {
			type: "hidden",
			name: attributes.name,
			value: options.uncheckedValue
		};
		return a.checkedinput([
			a.input( null, uncheckedGeneOptions ),
			a.input( null, attributes )
		] );
	} else {
		return a.input( null, attributes );
	};

};
