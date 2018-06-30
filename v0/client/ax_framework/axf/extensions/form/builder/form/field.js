AxFrameworkExtensionsFormBuilder.prototype.field = function(
  name,
  typeOrOptions,
  valueOrOptions,
  fieldOptions
) {

  var axFramework = this.axFramework;
  var a = axFramework.tags;
  var x = axFramework.extensions;
  var f = this;

  var options;
  var primaryType;
  var secondaryTypes;
  var input;
  var labelOptions;

  [ primaryType, secondaryTypes, options ] = f.parseArgs( typeOrOptions, valueOrOptions, fieldOptions )

  // Overwrite the field value from form data, if value exists
  options.value = this.formDataValueFor( name ) || options.value;

  var fieldAttributes = Object.assign(
    {
      _fieldChanged: function() {
        var nodes = this.closest("form") ? this.closest("form").querySelectorAll('field dependent') : [];
        nodes.forEach( function( node ) {
          node._checkDependentField();
        } );
      },
      _dependentMatch: function() {
        if ( options.dependent ) {
          return this.querySelector("dependent")._dependentMatch();
        } else {
          return true;
        }
      }
    },
    ( options.field || {} ).attributes || {}
  );

  // Build the field based on field type.
  if ( primaryType === "custom" ) {
    input = this.custom( name, secondaryTypes, options );
  } else {
    input = this.basic( name, primaryType, secondaryTypes[0], options );
  };

  // var labelEnabled = ( options.label === false || options.label.enabled === false ) ? false : true;
// debugger
  var outerwrapperOptions =  {
    attributes: options.outerwrapper,
    label: {
      // enabled: labelEnabled,
      attributes: typeof options.label === "object" ? options.label : options.label === false ? { $text: false } : options.label ? { $text: options.label } :  { $text: x.lib.titleize( name ) },
      leftwrapper: options.leftwrapper,
      rightwrapper: options.rightwrapper,
      layout: options.layout || primaryType,
      help: typeof options.help === "object" ? options.help : options.help ? x.md( options.help ) : {},
      hint: typeof options.hint === "object" ? options.hint : options.hint ? { $text: options.hint } : {},
    }
   };

  var wrappedField = f.outerwrapper( input, outerwrapperOptions );

  return a.field(
    options.dependent ?
      this.dependent( wrappedField, options.dependent ) :
      wrappedField,
    fieldAttributes
  );

};

    // case "checkbox":
    //   buildField( "input", { type: "checkbox" } );
      // field = this.input( name, Object.assign( { type: "checkbox" }, options["input"] ) );
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
      //     name,
      //     options.select[0],
      //     Object.assign(
      //       ( options.select[1] || {} ),
      //       { value: options.value }
      //     )
      //   );
      // } else {
      //   field = this.select( name, options.select, { value: options.value } );
      // }
      // break;
    //   return formFieldSelect(fieldArgs);
    // case "select_multiple":
    //   return formFieldSelectMultiple(fieldArgs);
    // case "select_with_input":
    //   return formFieldSelectWithInput(fieldArgs);
    // case "radio_buttons":
    //   return formFieldRadioButtons(fieldArgs);
    //   return wrapField( this.input( name,
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


  // var nameFor = function () {
  //   var args = Array.prototype.slice.call(arguments);
  //   return args.shift() + ( args.length > 0 ? '[' + args.join('][') + ']' : '' );
  // };

  // this.submit = function( buttonText, buttonOptions ) {
  // return axFramework.button( buttonText || "OK" );
  // };
  //
  // this.cancel = function( onclickFunction, buttonText, buttonOptions ) {
  // var back = function(e) { window.history.back(e) };
  // return axFramework.button(
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
	// return this.axFramework.input( geneOptions )
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
