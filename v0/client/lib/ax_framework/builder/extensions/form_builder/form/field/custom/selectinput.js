AxBuilderExtensionsFormCustomFieldBuilder.prototype.selectinput = function(
	name,
	options
) {

  var a = this.cellBuilder.tagBuilder;
  var f = this.formBuilder;

	var collectionAsArrayOfArrays = function () {
		var result = [];
    var collection = options.collection || [];
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

	options.collection = collectionAsArrayOfArrays();
	options.collection.push( "—————" );
	options.collection.push( [ "__USE_INPUT__", "Enter value" ]);

	options.id = options.id + "_selectinput";

	var selectValue;
	var inputValue;

	if ( options.value ) {
		var valueInCollection = options.collection.some( option => option[0] == options.value );
		selectValue = valueInCollection ? options.value : "__USE_INPUT__";
		inputValue = valueInCollection ? null : options.value;
	} else {
		 // show the input if no placeholder on select
		selectValue = options.placeholder === undefined ? "__USE_INPUT__" : "";
	}

  return a.selectinput(
		[
			f.input(
				name,
				"hidden",
				{
					value: options.value,
					_dependentValue: function() {
						return this.value;
					},
				}
			),
			f.select( "", {
				collection: options.collection,
				placeholder: options.placeholder,
				id: options.id,
				// required: options.collection.length > 2 ? options.required : false,
				value: selectValue,
				select: {
					$init: function() { this._checkSelection(); },
					onchange: function () {
						this._checkSelection();
						this.previousSibling.oninput();
					},
					_checkSelection () {
						if ( this.value === "__USE_INPUT__" ) {
							if ( options.required ) {
								this.nextSibling.required = true;
							};
							this.removeAttribute("required");
							this.nextSibling.style.display = "";
							this.nextSibling.focus();
							this.previousSibling.value = this.nextSibling.value;
						} else {
							if ( options.required ) {
								this.required = true;
							};
							this.nextSibling.removeAttribute("required");
							this.nextSibling.style.display = "none";
							this.previousSibling.value = this.value;
						};
					}
				}
			} ),
			f.input( "", "text", {
				input: {
					style: "display: none;",
					value: inputValue,
					oninput: function () {
						this.previousSibling.previousSibling.value = this.value;
						this.previousSibling.previousSibling.oninput();
					}
				}

			} )
		]
	);

};
