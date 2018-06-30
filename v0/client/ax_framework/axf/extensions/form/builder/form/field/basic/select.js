// Options
// attributes - <select> tag attributes
// value - field value
// collection - Selections. [ [ "1", "One" ], [ "2", "Two" ] ] or { "1":"One", "2":"Two" }
// placeholder - Inserted as inactive first selection


AxFrameworkExtensionsFormBuilder.prototype.select = function(
	name,
	options = {}
) {

	var value;
	var collection;

	var a = this.axFramework.tags;

	collection = options.collection || [];

	// Set default options if none given.
  if ( collection.length === 0 ) {
		collection = [ [ 0, "No" ], [ 1, "Yes" ] ]
	};

	// Convert options collection to array of arrays if it's an object.
	if ( !( collection instanceof Array ) ) {
		collection = Object.keys(collection).map(function( k ) {
			return [ k , collection[k] ];
		});
	};

	// Map options collection to genes
  collection = collection.map( function( optionContent ) {
		if ( typeof optionContent === "string" ) {
			if ( optionContent === "—————") {
				return { $type: "option", $text: "—————", disabled: true }
			} else {
				return { $type: "option", value: optionContent, $text: optionContent };
			};
    } else if ( optionContent instanceof Array ) {
			if ( optionContent[0] === "—————") {
				return { $type: "option", $text: "—————", disabled: true }
			} else {
				return { $type: "option", value: optionContent[0], $text: optionContent[1] };
			};
    } else {
			return optionContent;
    };
  });

	// Provide added support on the 'name' property when select/multiple:
	// ensure name ends in '[]'
  if ( attributes && attributes.multiple && name.slice(-2) != "[]" ) {
    name = name + "[]";
  };

	// Helper function to do comparison of array elements
	var arrayIncludes = function( array, value ) {
		return array.some( function( el ) { return el.toString() === value.toString(); } );
	};

	// Mark each select options as selected if in field value, where
	// value can be a single value or an Array.
	value = options.value;
	collection = collection.map( function( option ) {
		// debugger;
		if ( option.value &&
			( ( value instanceof Array && arrayIncludes( value, option.value ) ) ||
			( value && value.toString() === option.value.toString() ) )
	 	) {
			option.selected = "selected";
		};
		return option;
	} );

	// include blank option with any placeholder text, and select it if no other value
  if ( options.placeholder || options.placeholder === "" ) {

		var placeholderOptions = Object.assign(
			{
				value: "",
				disabled: options.required
			},
			value ? {} : { selected: true }
		);
		// collection.unshift( { $type: "option", $text: "—————", disabled: true } );
    collection.unshift(
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
	var attributes = Object.assign(
		{
			name: name,
			id: options.id,
			multiple: options.multiple,
			required: options.required,
			// readonly: options.readonly,
			disabled: options.disabled,

	    _dependentValue: function() {
	      return [].slice.call(
					this.selectedOptions
				).map( (option) => option.value ).join(" ");
			},
			_labelOnclick: function(e) {
				var input = this.querySelector("select");
				if ( e.target === input ) {
					return true;
				} else {
					input.focus();
					return false;
				};
			},
			onchange: function() {
				this.closest("field") && this.closest("field")._fieldChanged();
			},
	  },
		options.attributes || {}
	);

	// build the gene
	return a.select( collection, attributes )

};
