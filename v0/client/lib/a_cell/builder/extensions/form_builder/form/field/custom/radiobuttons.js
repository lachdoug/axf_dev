AcellBuilderExtensionsFormCustomFieldBuilder.prototype.radiobuttons = function(
	name,
	options
) {

  var a = this.cellBuilder.tagBuilder;
  var f = this.formBuilder;

	var collectionAsArrayOfArrays = function () {
		var result = [];
    var collection = options.collection;
		if ( collection instanceof Array) {
			result = collection;
		} else {
			var collectionKeys = Object.keys( collection );
		  var collectionValues = Object.values( collection );
		  for (var i = 0; i < collectionKeys.length; i++) {
		    result.push( [ collectionKeys[i], collectionValues[i] ] )
		  }
		};
		return result.map( function ( collectionOption ) {
			return collectionOptionAsArray( collectionOption );
		} );
	};

	var collectionOptionAsArray = function ( collectionOption ) {
		if ( collectionOption instanceof Array) {
			return collectionOption;
		} else if ( typeof collectionOption === "string" ) {
			return [ collectionOption, collectionOption ];
		} else {
			var key = Object.keys( collectionOption )[0];
			return [ key, collectionOption[key] ];
		};
	};

  var fieldValue = options.value;

	var radioButtons = collectionAsArrayOfArrays().map( function( radioButton ) {
    var id = options.id + "_input_" + radioButton[0];
    return a.radiobutton( [
      f.input(
        name,
        "radio",
        {
          checkedValue: radioButton[0],
          value: fieldValue,
					required: options.required,
          input: {
						id: id,
	          _dependentValue: function () {
              return this.closest("radiobuttons")._dependentValue();
            }
          }
        }
      ),
      a.label( radioButton[1], { for: id } )
    ] );
  } );

	var uncheckedInput = a.input( "", {
		type: "hidden",
		name: name,
		value: options.uncheckedValue
	} );

	radioButtons.unshift( uncheckedInput );

  return a.radiobuttons( radioButtons, {

    _dependentValue: function() {
      return this.querySelector('input:checked').value;
    },

  } );

};
