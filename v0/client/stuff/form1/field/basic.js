AcellDslFormBuilder.prototype.basic = function(
  fieldName,
  fieldType,
  fieldValue,
  builderOptions ) {

  // var fieldType;
  // var fieldValue;
  var field;
  var typeKeys;
  var primaryTypeKey;
  var secondaryTypeKey;

  // // Allocate the builder options
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
    // fieldGeneOptions.type = fieldGeneOptions.type || secondaryTypeKey;
    if ( secondaryTypeKey === "checkbox" && builderOptions.reverse === undefined ) {
      builderOptions.reverse = true;
    };
    if ( secondaryTypeKey === "hidden" && builderOptions.label === undefined ) {
      builderOptions.label = false;
    };
  };

  // // Assemble the field options for standard fields.
  // // Pass through custom field options.
  // // If options is array, first element is gene options
  // // and second element is builder options.
  // // If field options not array, must be object of builder options.
  // if ( primaryTypeKey === "custom" ) {
  //   customOptions = builderOptions[primaryTypeKey];
  // } else if ( builderOptions[primaryTypeKey] instanceof Array ) {
  //   fieldGeneOptions = Object.assign(
  //     fieldGeneOptions,
  //     ( builderOptions[primaryTypeKey][0] || {} )
  //   );
  //   fieldBuilderOptions = Object.assign(
  //     fieldBuilderOptions,
  //     ( builderOptions[primaryTypeKey][1] || {} )
  //   );
  // } else {
  //   fieldGeneOptions = Object.assign(
  //     fieldGeneOptions,
  //     ( builderOptions[primaryTypeKey] || {} )
  //   );
  // };

  // Give the field an id if it doesn't have one.
  // An id is needed by the label as its 'for' property and input datalist
  // if ( primaryTypeKey === "custom" ) {
  //   customOptions.id = customOptions.id || "a-cell-form-field-" + this.nameKeys( fieldName ).join("-");
  // } else {
    fieldGeneOptions.id = fieldGeneOptions.id || "a-cell-form-field-" + this.nameKeys( fieldName ).join("-");
  // };

  // Build the field based on field type.
  // if ( primaryTypeKey === "custom" ) {
  //   var customFieldBuilder = this.customFieldBuilder();
  //   if ( customFieldBuilder[secondaryTypeKey] ) {
  //     field = customFieldBuilder[secondaryTypeKey]( fieldName, fieldValue, customOptions );
  //   } else {
  //     console.log( "Form builder error: " + fieldType + " is not a supported field type.");
  //     // field = this.input( fieldName, builderOptions.value );
  //   };
  // } else if ( this[primaryTypeKey] ) {
    field = this[primaryTypeKey]( fieldName, fieldGeneOptions, fieldBuilderOptions );
  // } else {
  //   console.log( "Form builder error: " + fieldType + " is not a supported field type.");
  //   // field = this.input( fieldName, builderOptions.value );
  // };

  return this.wrapper(
    field,
    fieldName,
    wrapperGeneOptions,
    wrapperBuilderOptions
  );

};
