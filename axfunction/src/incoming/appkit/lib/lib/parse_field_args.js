ax.extensions.appkit.lib.parseFieldArgs = function(
  typeOrOptions, valueOrOptions, options
) {

  var fieldType;
  // var fieldValue;
  var primaryType;
  var secondaryTypes;
  var fieldOptions;

  if ( typeof typeOrOptions === "string" ) {
    fieldType = typeOrOptions;
    if (
      typeof valueOrOptions === "string" ||
      typeof valueOrOptions === "number" ||
      valueOrOptions instanceof Array
    ) {
      fieldOptions = options || {};
      fieldOptions.value = valueOrOptions;
    } else {
      fieldOptions = valueOrOptions || {};
      // fieldValue = options.value;
    };
  } else {
    fieldOptions = typeOrOptions || {};
    fieldType = fieldOptions.type || "input";
    // fieldValue = options.value;
  };

  if ( fieldType === undefined ) {
    fieldType = "input/text";
  } else if ( fieldType === "radios" ) {
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
  } else if ( fieldType === "check" || fieldType === "checkbox" ) {
    fieldType = "check/checkbox";
  } else if ( fieldType === "radio" ) {
    fieldType = "check/radio";
  };

  [ primaryType, ...secondaryTypes ] = fieldType.split('/');

  if ( secondaryTypes.length === 0 ) {
    if ( primaryType === "input" ) {
      secondaryTypes.push( "text" );
    } else if ( primaryType !== "textarea" && primaryType !== "select" && primaryType !== "check" ) {
      [ primaryType, secondaryTypes ] = [ "input", [ primaryType ] ];
    };
  };

  // debugger

  return [ primaryType, secondaryTypes, fieldOptions ];



};
