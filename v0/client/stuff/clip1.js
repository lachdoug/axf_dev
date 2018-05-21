ACellDslFormBuilder.prototype.input = function(
	name,
	inputType,
	fieldValue,
	fieldOptions ) {

	var geneOptions;
	// var value;

	var a = this.cellBuilder;

	geneOptions = Object.assign( ( fieldOptions.input || {} ), { name: name, value: value } );

	// // Populate the value from data, if it exists, otherwise from builder options.
	// // debugger;
	// var dataValue = this.formDataValueFor( geneOptions.name );
	// var value = dataValue || fieldOptions.value
	// if ( dataValue ) {
	// 	value = dataValue;
	// } else {
	// 	value = fieldOptions.value;
	// };

	// geneOptions = Object.assign( geneOptions );

	// stash the oninput function for use below
	// var oninputFunction = geneOptions.oninput;

	// determine the message for when there is a pattern mismatch
	var invalidPatternMessage = fieldOptions.invalidPatternMessage || ( 'Must match pattern ' + geneOptions.pattern )

	// Add custom behavior.
	var geneOptions = Object.assign(
		{
			// this is used by dependent fields feature in field wraper
	    _dependentValue: function() {
	      return this.value;
			},
			oninput: function(e) {
				this._checkPatternValidity() &&
				this.closest("dependentfield")._fieldChanged();
			},
			_checkPatternValidity: function() {
				if(this.validity.patternMismatch) {
					this.setCustomValidity(
						invalidPatternMessage
					);
				} else {
          this.setCustomValidity('')
			  };
			},
	  },
		geneOptions
	);

	if ( fieldOptions.datalist ) {
		var datalistId = geneOptions.id + "-datalist";
		geneOptions.list = datalistId;
		var datalistOptions = fieldOptions.datalist.map( function ( datalistOption ) {
			return a.option( { value: datalistOption } );
		} );
		return a.inputdatalist([
			a.input( geneOptions ),
			a.datalist( datalistOptions, { id: datalistId } )
		] );
	} else {
		return a.input( geneOptions );
	};

};
