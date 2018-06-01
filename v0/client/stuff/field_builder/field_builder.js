// ,

// }

// return Object.assign(
// 	{
// 		$type: "input",
// 		class: args.class || null,
// 		id: args.id || null,
// 		style: args.style || null,
// 		placeholder: args.placeholder || null,
// 		type: args.type || "text",
// 		name: args.name || null,
// 		value: args.value || null,
// 		pattern: args.pattern || null,
// 		min: args.min || null,
// 		max: args.max || null,
// 		autocomplete: args.autocomplete || null,
//
// 		onchange: function(e) {
//       args.onchange && args.onchange(e)
// 		},
//
// 		oninput: function(e) {
//
// 			// var defaultFn = function() {
// 				if(e.target.validity.patternMismatch) {
// 					e.target.setCustomValidity(
// 						args.patternMessage ||
// 						( 'Must match pattern ' + args.pattern )
// 					);
// 					// return false;
// 				} else {
//           e.target.setCustomValidity('')
// 					// return true;
// 			  };
// 			// };
//       args.oninput && args.oninput(e);
// 			// if ( args.oninput ) {
// 			// 	args.oninput(e) && defaultFn();
// 			// } else {
// 			// 	defaultFn();
// 			// };
// 		},
//
// 		$init: function () {
//
// 			if (args.onkeyup) {
// 				$(this).bind( "keyup paste cut", function (e) {
// 					args.onkeyup(e);
// 				} );
// 			};
//
// 			if (args.onkeydown) {
// 				$(this).bind( "keydown", function () {
// 					args.onkeydown(this);
// 				} );
// 			};
//
// 			args.init && init(this);
//
// 		},
//
//     _value: function() {
//       return this.value;
//     },
// 	},
// 	args.required ? { required: 'required' } : {},
// 	args.disabled ? { disabled: 'disabled' } : {},
// );


// function AcellDslFormFieldBuilder(cellBuilder, formArgs) {
//
//   this.cellBuilder = cellBuilder;
//
//
//
//   // this.field = function( nameOrFieldArgs, fieldOptions, builderOptions ) {
//   //
//   //   if ( typeof nameOrFieldArgs === "string" ) {
//   //     fieldArgs = Object.assign( { name: nameOrFieldArgs }, ( fieldOptions || {} ) );
//   //   } else {
//   //     fieldArgs = nameOrFieldArgs;
//   //   };
//   //
//   //   if ( fieldArgs.name && fieldArgs.name.length > 0 ) {
//   //     // fieldArgs.name = formArgs.name ?
//   //     //                   fieldNameFor( formArgs.name, fieldArgs.name ) :
//   //     //                   fieldArgs.name;
//   //   } else {
//   //     throw "Field requires name. " + JSON.stringify(fieldArgs)
//   //   };
//   //
//   //   if ( formArgs.data ) {
//   //     Object.assign( fieldArgs, { value: formArgs.data[fieldArgs.name] } )
//   //   };
//   //
//   //   return fieldFor( fieldArgs )
//   //
//   // };
//   //
//   // var wrapField = function ( fieldArgs, field ) {
//   //   return this.wrapper( fieldArgs, field );
//   // }.bind(this);
//   //
//   // var fieldFor = function( fieldArgs ) {
//   //   switch( fieldArgs.type )	{
//   //     case "string":
//   //       return wrapField( Object.assign( fieldArgs, { type: "text" } ), this.input( fieldArgs ) );
//   //     // case "file":
//   //     //   return wrapField( Object.assign( fieldArgs, { style: "height: inherit; " + fieldArgs.style } ), this.input( fieldArgs ) )
//   //     case "site_password":
//   //       return wrapField( Object.assign( fieldArgs, { type: "password" } ), this.input( fieldArgs ) );
//   //     case "hidden":
//   //       return wrapField( Object.assign( fieldArgs, { type: "hidden" } ), this.input( fieldArgs ) );
//   //
//   //
//   //     // case "text":
//   //     //   return formFieldTextArea( fieldArgs );
//   //     // case "select":
//   //     //   return formFieldSelect(fieldArgs);
//   //     // case "select_multiple":
//   //     //   return formFieldSelectMultiple(fieldArgs);
//   //     // case "select_with_input":
//   //     //   return formFieldSelectWithInput(fieldArgs);
//   //     // case "radio_buttons":
//   //     //   return formFieldRadioButtons(fieldArgs);
//   //     // case "checkbox":
//   //     //   return formFieldCheckbox(fieldArgs);
//   //     // case "checkbox_boolean":
//   //     //   return formFieldCheckboxBoolean(fieldArgs);
//   //     // case "checkboxes":
//   //     //   return formFieldCheckboxes(fieldArgs);
//   //     // // case "hidden":
//   //     // //   return formFieldInputUnwrapped( fieldArgs );
//   //     // case "color":
//   //     //   return formFieldColor( fieldArgs );
//   //     // case "country":
//   //     //   return formFieldCountry( fieldArgs );
//   //     // case "language":
//   //     //   return formFieldLanguage( fieldArgs );
//   //     // case "timezone":
//   //     //   return formFieldTimezone( fieldArgs );
//   //     // case "password":
//   //     //   return formFieldPassword( fieldArgs );
//   //     // case "password_with_confirmation":
//   //     //   return formFieldPasswordWithConfirmation(fieldArgs);
//   //     // case "site_password_with_confirmation":
//   //     //   return formFieldSitePasswordWithConfirmation(fieldArgs);
//   //     default:
//   //       return wrapField( fieldArgs, this.input( fieldArgs ) );
//   //   };
//   // }.bind(this);
//   //
//   // // var fieldNameFor = function () {
//   // //   var args = Array.prototype.slice.call(arguments);
//   // //   return args.shift() + ( args.length > 0 ? '[' + args.join('][') + ']' : '' );
//   // // };
//   //
//   // this.submit = function( buttonText, buttonOptions ) {
//   //   return cellBuilder.button( buttonText || "OK" );
//   // };
//   //
//   // this.cancel = function( onclickFunction, buttonText, buttonOptions ) {
//   //   var back = function(e) { window.history.back(e) };
//   //   return cellBuilder.button(
//   //     buttonText || "Cancel",
//   //     Object.assign( {
//   //       type: "button",
//   //       onclick: onclickFunction || back
//   //     }, buttonOptions )
//   //   );
//   // };
//
// };
