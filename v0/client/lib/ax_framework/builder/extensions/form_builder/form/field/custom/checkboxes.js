AxBuilderExtensionsFormCustomFieldBuilder.prototype.checkboxes = function(
	name,
	options
) {

  var a = this.cellBuilder.tagBuilder;
  var f = this.formBuilder;

  // Ensure name ends in '[]'
  if ( name.slice(-2) != "[]" ) {
    name = name + "[]";
  };

	// Ensure value is an array
  if ( !( options.value instanceof Array ) ) {
    if ( options.value ) {
	    options.value = [ options.value ];
	  } else {
     	options.value = [];
		};
	};

	// Convert options collection to array of arrays if it's an object.
	if ( !( options.collection instanceof Array ) ) {
		options.collection = Object.keys( options.collection ).map(function( k ) {
			return [ k , options.collection[k] ];
		});
	};

	var arrayIncludes = function( array, value ) {
		return array.some( function( el ) { return el.toString() === value.toString(); } );
	};

  return a.checkboxes( null, {

    _dependentValue: function() {
			result = [];
			var checked = this.querySelectorAll('input:checked')
      for ( var i in checked ) {
				result.push( checked[i].value );
			}
			return result.join(" ")
    },

    $components: options.collection.map( function( checkbox ) {

			if ( typeof checkbox === "string" ) { checkbox = [ checkbox, checkbox ]; };
      var checkboxId = options.id + "_input_" + checkbox[0];

      return a.checkbox( [
        f.input(
          name,
          "checkbox",
          {
            checkedValue: checkbox[0],
            value: arrayIncludes( options.value, checkbox[0] ) ? checkbox[0] : "",
						required: options.required,
            input: {
							id: checkboxId,
	            _dependentValue: function () {
                return this.closest("checkboxes")._dependentValue();
              }
            }
          }
        ),
        a.label( checkbox[1], { for: checkboxId } )
      ] );
    } ),
  } );

};
