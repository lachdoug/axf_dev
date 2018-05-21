// ACellDslFormBuilder.prototype.select = function( nameOrSelectOptions, selectOptionsOrGeneOptions, geneOptionsOrBuilderOptions, builderOptions ) {
ACellDslFormBuilder.prototype.select = function( nameOrGeneOptions, geneOptionsOrBuilderOptions, builderOptions ) {

	var geneOptions;
	var fieldValue;
	var selectOptions;

	// Assign arguments depending on the data type of the first argument
	if ( typeof nameOrGeneOptions === "string" ) {
		geneOptions = Object.assign( { name: nameOrGeneOptions }, ( geneOptionsOrBuilderOptions || {} ) );
		builderOptions = builderOptions || {};
	} else {
		geneOptions = nameOrGeneOptions || {};
		builderOptions = geneOptionsOrBuilderOptions || {};
	};

	selectOptions = builderOptions.collection || [];

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
    if ( typeof optionContent === "string" ) {
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
		return array.some( function( el ) { return el == value; } );
	};

	// Mark each select options as selected if in field value, where
	// value can be a single value or an Array.
	fieldValue = builderOptions.value;
	selectOptions = selectOptions.map( function( option ) {
		// debugger;
		if (
			( fieldValue instanceof Array && arrayIncludes( fieldValue, option.value ) ) ||
			( typeof fieldValue !== "undefined" && fieldValue == option.value )
	 	) {
			option.selected = "selected";
		};
		return option;
	} );

	// include blank option with any placeholder text, and select it if no other value
  if ( builderOptions.placeholder || builderOptions.placeholder === "" ) {
    selectOptions.unshift(
      Object.assign(
        { $type: "option", disabled: true, value: "", $text: builderOptions.placeholder },
        fieldValue ? {} : { selected: true }
      )
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
	return this.cellBuilder.select( selectOptions, geneOptions )

};
