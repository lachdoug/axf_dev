AcellBuilderExtensionsFormBuilder.prototype.select = function(
	name,
	options = {}
) {

	var geneOptions;
	var fieldValue;
	var selectOptions;

	var a = this.cellBuilder.tagBuilder;
// debugger;
	geneOptions = Object.assign(
		{
			name: name,
			id: options.id,
			multiple: options.multiple,
			required: options.required,
		},
		( options.select || {} )
	);

	selectOptions = options.collection || [];

	// Set default options if none given.
  if ( selectOptions.length === 0 ) {
		selectOptions = [ [ 0, "No" ], [ 1, "Yes" ] ]
	};

	// Convert options collection to array of arrays if it's an object.
	if ( !( selectOptions instanceof Array ) ) {
		selectOptions = Object.keys(selectOptions).map(function( k ) {
			return [ k , selectOptions[k] ];
		});
	};

	// Map options collection to genes
  selectOptions = selectOptions.map( function( optionContent ) {
    if ( optionContent === "—————") {
			return { $type: "option", $text: optionContent, disabled: true }
		} else if ( typeof optionContent === "string" ) {
			return { $type: "option", value: optionContent, $text: optionContent };
    } else if ( optionContent instanceof Array ) {
			return { $type: "option", value: optionContent[0], $text: optionContent[1] };
    } else {
			return optionContent;
    };
  });

	// Provide added support on the 'name' property when select/multiple:
	// ensure name ends in '[]'
  if ( geneOptions.multiple && geneOptions.name.slice(-2) != "[]" ) {
    geneOptions.name = geneOptions.name + "[]";
  };

	// Helper function to do abstract comparison of array elements
	var arrayIncludes = function( array, value ) {
		return array.some( function( el ) { return el.toString() === value.toString(); } );
	};

	// Mark each select options as selected if in field value, where
	// value can be a single value or an Array.
	fieldValue = options.value;
	selectOptions = selectOptions.map( function( option ) {
		// debugger;
		if ( option.value &&
			( ( fieldValue instanceof Array && arrayIncludes( fieldValue, option.value ) ) ||
			( fieldValue && fieldValue.toString() === option.value.toString() ) )
	 	) {
			option.selected = "selected";
		};
		return option;
	} );

	// include blank option with any placeholder text, and select it if no other value
  if ( options.placeholder || options.placeholder === "" ) {
		// debugger
		var placeholderOptions = Object.assign(
			{
				value: "",
				disabled: options.required
			},
			fieldValue ? {} : { selected: true }
		);
		// selectOptions.unshift( { $type: "option", $text: "—————", disabled: true } );
    selectOptions.unshift(
			a.option( options.placeholder, placeholderOptions )
      // Object.assign(
      //   { $type: "option", value: "", $text: options.placeholder },
      //
      // )
    );
  };

	// Assemble the gene.
	// Assign a special function on the gene that returns current field value,
	// for use with dependent fields feature in field wrapper.
	geneOptions = Object.assign(
		{
	    _dependentValue: function() {
	      return [].slice.call(
					this.selectedOptions
				).map( (option) => option.value ).join(" ");
			},
			onchange: function() {
				this.closest("dependentfield")._fieldChanged();
			},
	  },
		geneOptions
	);

	// build the gene
	return a.select( selectOptions, geneOptions )

};
