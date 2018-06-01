AcellBuilderExtensionsFormBuilder.prototype.input = function(
	name,
	secondaryTypeKey,
	options = {} ) {


	// var geneOptions;
	var a = this.cellBuilder.tagBuilder;

	options.input = options.input || {}
	options.input.type = secondaryTypeKey;
	if ( secondaryTypeKey === "checkbox" || secondaryTypeKey === "radio") {

		var fieldValue = options.value;
		options.value = options.checkedValue || "on";
		// debugger;

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

	// debugger;

	// Assemble gene
	var geneOptions = Object.assign(
		{
			name: name,
			id: options.id,
			value: options.value,
			pattern: options.pattern,
			checked: options.checked,
			required: options.required,
			// datalist: datalistId,
			// this is used by dependent fields feature in field wraper
	    _dependentValue: function() {
	      return this.value;
			},

			$init: function () { this._checkPatternValidity(); },
			oninput: function(e) {
				// debugger;

				this._checkPatternValidity() &&
				this.closest("dependentfield")._fieldChanged();
			},
			_checkPatternValidity: function() {
				if(this.validity.patternMismatch) {
					// debugger;
					this.setCustomValidity(
						options.invalid || ( 'Must match ' + geneOptions.pattern )
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
		var datalistId = geneOptions.id + "_datalist";
		geneOptions.list = datalistId;
		var datalistContent = options.datalist.map( function ( datalistOption ) {
			return a.option( null, { value: datalistOption } );
		} );
		return a.inputdatalist([
			a.input( null, geneOptions ),
			a.datalist( datalistContent, { id: datalistId } )
		] );
	} else if ( options.uncheckedValue ) {
		var uncheckedGeneOptions = {
			type: "hidden",
			name: geneOptions.name,
			value: options.uncheckedValue
		};
		return a.checkedinput([
			a.input( null, uncheckedGeneOptions ),
			a.input( null, geneOptions )
		] );
	} else {
		return a.input( null, geneOptions );
	};

};
