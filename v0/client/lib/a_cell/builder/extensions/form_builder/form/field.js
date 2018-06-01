AcellBuilderExtensionsFormBuilder.prototype.field = function(
  fieldName,
  fieldTypeOrOptions,
  fieldValueOrOptions,
  options
) {

  var c = this.cellBuilder
  var a = c.tagBuilder;
  var x = c.extensionsBuilder;
  var f = this;

  var fieldType;
  var fieldValue;
  var field;
  var typeKeys;
  var primaryTypeKey;
  var secondaryTypeKey;

  // Assign arguments depending on the data types
  // of the second and third arguments.
  // First argument is always name.
	if ( typeof fieldTypeOrOptions === "string" ) {
    fieldType = fieldTypeOrOptions;
    if (
      typeof fieldValueOrOptions === "string" ||
      typeof fieldValueOrOptions === "number" ||
      fieldValueOrOptions instanceof Array
    ) {
      options.value = fieldValueOrOptions;
    } else {
      options = fieldValueOrOptions || {};
      // fieldValue = options.value;
    };
	} else {
    options = fieldTypeOrOptions || {};
    fieldType = options.type || "input";
    // fieldValue = options.value;
	};

  // Overwrite the field value from form data, if value exists
  options.value = this.formDataValueFor( fieldName ) || options.value;
// debugger;

  if ( fieldType === "radios" ) {
    fieldType = "custom/radiobuttons";
  } else if ( fieldType === "checkboxes" ) {
    fieldType = "custom/checkboxes";
  } else if ( fieldType === "multiselect" ) {
    fieldType = "custom/multiselect";
  } else if ( fieldType === "markdown" ) {
    fieldType = "custom/simplemde";
  } else if ( fieldType === "code" ) {
    fieldType = "custom/codemirror";
  } else if ( fieldType === "codemode" ) {
    fieldType = "custom/codemirrormode";
  } else if ( fieldType === "selectinput" ) {
    fieldType = "custom/selectinput";
  };

  // Determine the field type keys
  [ primaryTypeKey, secondaryTypeKey ] = fieldType.split('/');

  // Give an id if not already provided.
  // An id is needed by the label as its 'for' property; and input datalist
  var randomId = function() {
    // debugger;
    var prefix = "ax_form_field_" + primaryTypeKey + "_" +
                  x.lib.nameKeys( fieldName ).join("_");
    return c.randomId( prefix );
  };

  options.id = options.id || randomId();

// debugger;

  // Build the field based on field type.
  if ( primaryTypeKey === "custom" ) {
    field = this.custom( fieldName, secondaryTypeKey, options );
  } else {
    field = this.basic( fieldName, primaryTypeKey, secondaryTypeKey, options );
  };

  var fieldOptions = Object.assign(
    {
      id: options.id
    },
    options.fieldCell || {}
  );

  return a.field(
    this.dependentfield( field, fieldName, options ),
    fieldOptions
  );

};

    // case "checkbox":
    //   buildField( "input", { type: "checkbox" } );
      // field = this.input( fieldName, Object.assign( { type: "checkbox" }, options["input"] ) );
    // case "file":
    //   return wrapField( Object.assign( fieldArgs, { style: "height: inherit; " + fieldArgs.style } ), this.input( fieldArgs ) )
    // case "site_password":
    //   return wrapField( Object.assign( fieldArgs, { type: "password" } ), this.input( fieldArgs ) );
    // case "hidden":
    //   return wrapField( Object.assign( fieldArgs, { type: "hidden" } ), this.input( fieldArgs ) );
    // case "text":
    //   return formFieldTextArea( fieldArgs );
      // if ( options["select"] instanceof Array ) {
      //   field = this.select(
      //     fieldName,
      //     options.select[0],
      //     Object.assign(
      //       ( options.select[1] || {} ),
      //       { value: options.value }
      //     )
      //   );
      // } else {
      //   field = this.select( fieldName, options.select, { value: options.value } );
      // }
      // break;
    //   return formFieldSelect(fieldArgs);
    // case "select_multiple":
    //   return formFieldSelectMultiple(fieldArgs);
    // case "select_with_input":
    //   return formFieldSelectWithInput(fieldArgs);
    // case "radio_buttons":
    //   return formFieldRadioButtons(fieldArgs);
    //   return wrapField( this.input( fieldName,
    //     Object.assign( { type: "checkbox" }, ( options["input"] || {} ) ) ) );
    // case "checkbox_boolean":
    //   return formFieldCheckboxBoolean(fieldArgs);
    // case "checkboxes":
    //   return formFieldCheckboxes(fieldArgs);
    // // case "hidden":
    // //   return formFieldInputUnwrapped( fieldArgs );
    // case "color":
    //   return formFieldColor( fieldArgs );
    // case "country":
    //   return formFieldCountry( fieldArgs );
    // case "language":
    //   return formFieldLanguage( fieldArgs );
    // case "timezone":
    //   return formFieldTimezone( fieldArgs );
    // case "password":
    //   return formFieldPassword( fieldArgs );
    // case "password_with_confirmation":
    //   return formFieldPasswordWithConfirmation(fieldArgs);
    // case "site_password_with_confirmation":
    //   return formFieldSitePasswordWithConfirmation(fieldArgs);

  // };


  // var fieldNameFor = function () {
  //   var args = Array.prototype.slice.call(arguments);
  //   return args.shift() + ( args.length > 0 ? '[' + args.join('][') + ']' : '' );
  // };

  // this.submit = function( buttonText, buttonOptions ) {
  // return cellBuilder.button( buttonText || "OK" );
  // };
  //
  // this.cancel = function( onclickFunction, buttonText, buttonOptions ) {
  // var back = function(e) { window.history.back(e) };
  // return cellBuilder.button(
  //   buttonText || "Cancel",
  //   Object.assign( {
  //     type: "button",
  //     onclick: onclickFunction || back
  //   }, buttonOptions )
  // );
  // };



	// var geneOptions;
  //
	// if ( typeof nameOrGeneOptions === "string" ) {
	// 	geneOptions = Object.assign( { name: nameOrGeneOptions }, ( geneOptionsOrBuilderOptions || {} ) );
	// 	options = options || {};
	// } else {
	// 	geneOptions = nameOrGeneOptions;
	// 	options = geneOptionsOrBuilderOptions || {};
	// };
  //
	// var oninputFunction = geneOptions.oninput;
	// var invalidPatternMessage = options.invalidPatternMessage || ( 'Must match pattern ' + geneOptions.pattern )
  //
	// geneOptions = Object.assign(
	// 	{
	//     value: function() {
	//       return this.value;
	// 		},
	// 		oninput: function(e) {
	// 			oninputFunction ?
	// 			oninputFunction(e) && this._checkPatternValidity() :
	// 			this._checkPatternValidity();
	// 		},
	// 		_checkPatternValidity: function() {
	// 			if(this.validity.patternMismatch) {
	// 				this.setCustomValidity(
	// 					invalidPatternMessage
	// 				);
	// 			} else {
  //         this.setCustomValidity('')
	// 		  };
	// 		},
	//   },
	// 	geneOptions
	// );
  //
	// return this.cellBuilder.input( geneOptions )
	// // ,
  //
	// // }
  //
	// // return Object.assign(
	// // 	{
	// // 		$type: "input",
	// // 		class: args.class || null,
	// // 		id: args.id || null,
	// // 		style: args.style || null,
	// // 		placeholder: args.placeholder || null,
	// // 		type: args.type || "text",
	// // 		name: args.name || null,
	// // 		value: args.value || null,
	// // 		pattern: args.pattern || null,
	// // 		min: args.min || null,
	// // 		max: args.max || null,
	// // 		autocomplete: args.autocomplete || null,
	// //
	// // 		onchange: function(e) {
  // //       args.onchange && args.onchange(e)
	// // 		},
	// //
	// // 		oninput: function(e) {
	// //
	// // 			// var defaultFn = function() {
	// // 				if(e.target.validity.patternMismatch) {
	// // 					e.target.setCustomValidity(
	// // 						args.patternMessage ||
	// // 						( 'Must match pattern ' + args.pattern )
	// // 					);
	// // 					// return false;
	// // 				} else {
  // //           e.target.setCustomValidity('')
	// // 					// return true;
	// // 			  };
	// // 			// };
  // //       args.oninput && args.oninput(e);
	// // 			// if ( args.oninput ) {
	// // 			// 	args.oninput(e) && defaultFn();
	// // 			// } else {
	// // 			// 	defaultFn();
	// // 			// };
	// // 		},
	// //
	// // 		$init: function () {
	// //
	// // 			if (args.onkeyup) {
	// // 				$(this).bind( "keyup paste cut", function (e) {
	// // 					args.onkeyup(e);
	// // 				} );
	// // 			};
	// //
	// // 			if (args.onkeydown) {
	// // 				$(this).bind( "keydown", function () {
	// // 					args.onkeydown(this);
	// // 				} );
	// // 			};
	// //
	// // 			args.init && init(this);
	// //
	// // 		},
	// //
  // //     value: function() {
  // //       return this.value;
  // //     },
	// // 	},
	// // 	args.required ? { required: 'required' } : {},
	// // 	args.disabled ? { disabled: 'disabled' } : {},
	// // );
