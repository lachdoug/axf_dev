AxDslFormBuilder.prototype.field = function(
  fieldName,
  fieldTypeOrBuilderOptions,
  fieldValueOrBuilderOptions,
  builderOptions ) {

  var fieldType;
  var fieldValue;
  var field;
  var typeKeys;
  var primaryTypeKey;
  var secondaryTypeKey;

  // Assign arguments depending on the data types
  // of the second and third arguments.
  // First argument is always name.
  if ( typeof fieldTypeOrBuilderOptions === "string" ) {
    fieldType = fieldTypeOrBuilderOptions;
    if (
      typeof fieldValueOrBuilderOptions === "string" ||
      typeof fieldValueOrBuilderOptions === "number" ||
      fieldValueOrBuilderOptions instanceof Array
    ) {
      builderOptions = Object.assign(
        { value: fieldValueOrBuilderOptions },
        ( builderOptions || {} )
      );
    } else {
      builderOptions = fieldValueOrBuilderOptions || {};
    };
  } else {
    builderOptions = fieldTypeOrBuilderOptions || {};
    fieldType = builderOptions.type || "input";
  };

  // Get the field value from form data, or use default value from builder options
  fieldValue = this.formDataValueFor( fieldName ) || builderOptions.value;

  // Allocate the builder options
  // var fieldGeneOptions = {
  //   multiple: builderOptions.multiple // used by select
  // };
  // var fieldBuilderOptions = {
  //   value: fieldValue, // used by all field types
  //   collection: builderOptions.collection, // used by select
  //   datalist: builderOptions.datalist, // used by input
  // };
  // var wrapperGeneOptions = builderOptions.wrapper || {};
  // var wrapperBuilderOptions = {
  //   label: builderOptions.label,
  //   help: builderOptions.help,
  //   hint: builderOptions.hint,
  //   reverse: builderOptions.reverse,
  //   dependent: builderOptions.dependent
  // };

  // Determine the field type keys
  [ primaryTypeKey, secondaryTypeKey ] = fieldType.split('/');
  if ( primaryTypeKey === undefined ) {
    [ primaryTypeKey, secondaryTypeKey ] = [ "input", "text" ];
  } else if ( secondaryTypeKey === undefined ) {
    if ( primaryTypeKey === "input" ) {
      secondaryTypeKey = "text";
    } else if ( primaryTypeKey !== "textarea" && primaryTypeKey !== "select" ) {
      [ primaryTypeKey, secondaryTypeKey ] = [ "input", primaryTypeKey ];
    };
  };

  // Make field-specific customisations
  if ( primaryTypeKey === "input" ) {
    fieldGeneOptions.type = fieldGeneOptions.type || secondaryTypeKey;
    if ( secondaryTypeKey === "checkbox" && wrapperBuilderOptions.reverse === undefined ) {
      wrapperBuilderOptions.reverse = true;
    };
    if ( secondaryTypeKey === "hidden" && wrapperBuilderOptions.label === undefined ) {
      wrapperBuilderOptions.label = false;
    };
  };

  // Assemble the field options for standard fields.
  // Pass through custom field options.
  // If options is array, first element is gene options
  // and second element is builder options.
  // If field options not array, must be object of builder options.
  if ( primaryTypeKey === "custom" ) {
    customOptions = builderOptions[primaryTypeKey];
  } else if ( builderOptions[primaryTypeKey] instanceof Array ) {
    fieldGeneOptions = Object.assign(
      fieldGeneOptions,
      ( builderOptions[primaryTypeKey][0] || {} )
    );
    fieldBuilderOptions = Object.assign(
      fieldBuilderOptions,
      ( builderOptions[primaryTypeKey][1] || {} )
    );
  } else {
    fieldGeneOptions = Object.assign(
      fieldGeneOptions,
      ( builderOptions[primaryTypeKey] || {} )
    );
  };

  // Give the field an id if it doesn't have one.
  // An id is needed by the label as its 'for' property and input datalist
  // if ( primaryTypeKey === "custom" ) {
    builderOptions.id = builderOptions.id || "a-cell-form-field-" + this.nameKeys( fieldName ).join("-");
  // } else {
    // fieldGeneOptions.id = fieldGeneOptions.id || "a-cell-form-field-" + this.nameKeys( fieldName ).join("-");
  // };

  // Build the field based on field type.
  if ( primaryTypeKey === "custom" ) {
    var customFieldBuilder = this.customFieldBuilder();
    if ( customFieldBuilder[secondaryTypeKey] ) {
      field = customFieldBuilder[secondaryTypeKey]( fieldName, fieldValue, customOptions );
    } else {
      console.log( "Form builder error: " + fieldType + " is not a supported field type.");
      // field = this.input( fieldName, builderOptions.value );
    };
  } else if ( this[primaryTypeKey] ) {
    field = this[primaryTypeKey]( fieldName, fieldGeneOptions, fieldBuilderOptions );
  } else {
    console.log( "Form builder error: " + fieldType + " is not a supported field type.");
    // field = this.input( fieldName, builderOptions.value );
  };

  return this.wrapper(
    field,
    fieldName,
    wrapperGeneOptions,
    wrapperBuilderOptions
  );

};

    // case "checkbox":
    //   buildField( "input", { type: "checkbox" } );
      // field = this.input( fieldName, Object.assign( { type: "checkbox" }, builderOptions["input"] ) );
    // case "file":
    //   return wrapField( Object.assign( fieldArgs, { style: "height: inherit; " + fieldArgs.style } ), this.input( fieldArgs ) )
    // case "site_password":
    //   return wrapField( Object.assign( fieldArgs, { type: "password" } ), this.input( fieldArgs ) );
    // case "hidden":
    //   return wrapField( Object.assign( fieldArgs, { type: "hidden" } ), this.input( fieldArgs ) );
    // case "text":
    //   return formFieldTextArea( fieldArgs );
      // if ( builderOptions["select"] instanceof Array ) {
      //   field = this.select(
      //     fieldName,
      //     builderOptions.select[0],
      //     Object.assign(
      //       ( builderOptions.select[1] || {} ),
      //       { value: builderOptions.value }
      //     )
      //   );
      // } else {
      //   field = this.select( fieldName, builderOptions.select, { value: builderOptions.value } );
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
    //     Object.assign( { type: "checkbox" }, ( builderOptions["input"] || {} ) ) ) );
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
  //   geneOptions = Object.assign( { name: nameOrGeneOptions }, ( geneOptionsOrBuilderOptions || {} ) );
  //   builderOptions = builderOptions || {};
  // } else {
  //   geneOptions = nameOrGeneOptions;
  //   builderOptions = geneOptionsOrBuilderOptions || {};
  // };
  //
  // var oninputFunction = geneOptions.oninput;
  // var invalidPatternMessage = builderOptions.invalidPatternMessage || ( 'Must match pattern ' + geneOptions.pattern )
  //
  // geneOptions = Object.assign(
  //   {
  //     value: function() {
  //       return this.value;
  //     },
  //     oninput: function(e) {
  //       oninputFunction ?
  //       oninputFunction(e) && this._checkPatternValidity() :
  //       this._checkPatternValidity();
  //     },
  //     _checkPatternValidity: function() {
  //       if(this.validity.patternMismatch) {
  //         this.setCustomValidity(
  //           invalidPatternMessage
  //         );
  //       } else {
  //         this.setCustomValidity('')
  //       };
  //     },
  //   },
  //   geneOptions
  // );
  //
  // return this.cellBuilder.input( geneOptions )
  // // ,
  //
  // // }
  //
  // // return Object.assign(
  // //   {
  // //     $type: "input",
  // //     class: args.class || null,
  // //     id: args.id || null,
  // //     style: args.style || null,
  // //     placeholder: args.placeholder || null,
  // //     type: args.type || "text",
  // //     name: args.name || null,
  // //     value: args.value || null,
  // //     pattern: args.pattern || null,
  // //     min: args.min || null,
  // //     max: args.max || null,
  // //     autocomplete: args.autocomplete || null,
  // //
  // //     onchange: function(e) {
  // //       args.onchange && args.onchange(e)
  // //     },
  // //
  // //     oninput: function(e) {
  // //
  // //       // var defaultFn = function() {
  // //         if(e.target.validity.patternMismatch) {
  // //           e.target.setCustomValidity(
  // //             args.patternMessage ||
  // //             ( 'Must match pattern ' + args.pattern )
  // //           );
  // //           // return false;
  // //         } else {
  // //           e.target.setCustomValidity('')
  // //           // return true;
  // //         };
  // //       // };
  // //       args.oninput && args.oninput(e);
  // //       // if ( args.oninput ) {
  // //       //   args.oninput(e) && defaultFn();
  // //       // } else {
  // //       //   defaultFn();
  // //       // };
  // //     },
  // //
  // //     $init: function () {
  // //
  // //       if (args.onkeyup) {
  // //         $(this).bind( "keyup paste cut", function (e) {
  // //           args.onkeyup(e);
  // //         } );
  // //       };
  // //
  // //       if (args.onkeydown) {
  // //         $(this).bind( "keydown", function () {
  // //           args.onkeydown(this);
  // //         } );
  // //       };
  // //
  // //       args.init && init(this);
  // //
  // //     },
  // //
  // //     value: function() {
  // //       return this.value;
  // //     },
  // //   },
  // //   args.required ? { required: 'required' } : {},
  // //   args.disabled ? { disabled: 'disabled' } : {},
  // // );
