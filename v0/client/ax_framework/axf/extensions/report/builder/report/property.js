AxFrameworkExtensionsReportBuilder.prototype.property = function(
  propertyName,
  propertyTypeOrOptions,
  propertyValueOrOptions,
  options={}
) {

  var axFramework = this.axFramework;
  var a = axFramework.tags;
  var x = axFramework.extensions;
  var r = this;

  var propertyType;
  var propertyValue;
  var property;
  var primaryTypeKey;
  var secondaryTypeKey;
  var value;

  // Assign arguments depending on the data types
  // of the second and third arguments.
  // First argument is always name.
	if ( typeof propertyTypeOrOptions === "string" ) {
    propertyType = propertyTypeOrOptions;
    if (
      typeof propertyValueOrOptions === "string" ||
      typeof propertyValueOrOptions === "number" ||
      propertyValueOrOptions instanceof Array
    ) {
      value = propertyValueOrOptions;
    } else {
      options = propertyValueOrOptions || {};
      value = options.value;
    };
	} else {
    options = propertyTypeOrOptions || {};
    propertyType = options.type || "output";
    value = options.value;
	};

  // Overwrite the property value from report data, if value exists
  value = this.reportDataValueFor( propertyName ) || value;

  // if ( propertyType === "radios" ) {
  //   propertyType = "custom/radiobuttons";
  // } else if ( propertyType === "checkboxes" ) {
  //   propertyType = "custom/checkboxes";
  // } else if ( propertyType === "multiselect" ) {
  //   propertyType = "custom/multiselect";
  // } else if ( propertyType === "markdown" ) {
  //   propertyType = "custom/simplemde";
  // } else if ( propertyType === "code" ) {
  //   propertyType = "custom/codemirror";
  // } else if ( propertyType === "codemode" ) {
  //   propertyType = "custom/codemirrormode";
  // } else if ( propertyType === "selectinput" ) {
  //   propertyType = "custom/selectinput";
  // };

  // Determine the property type keys
  [ primaryTypeKey, secondaryTypeKey ] = propertyType.split('/');

  // Give an id if not already provided.
  // An id is needed by the label as its 'for' property; and input datalist
  options.id = options.id || axNextUniqueId();

  var attributes = Object.assign(
    {
      id: options.id,
      _propertyChanged: function() {
        var nodes = this.closest("report") ? this.closest("report").querySelectorAll('dependentproperty') : [];
        nodes.forEach( function( node ) {
          node._checkDependentField();
        } );
      },
      _dependentMatch: function() {
        if ( options.dependent ) {
          return this.querySelector("dependentproperty")._dependentMatch();
        } else {
          return true;
        }
      }
    },
    options.propertyAttributes || {}
  );

  options.id = options.id + "_property";

  // Build the property based on property type.
  if ( primaryTypeKey === "custom" ) {
    property = this.custom( propertyName, secondaryTypeKey, value, options );
  } else {
    property = this.basic( propertyName, propertyType, value, options );
  };

  return a.property(
    options.dependent ?
      this.dependent( property, propertyName, options ) :
      r.wrapper( property, propertyName, options ),
    attributes
  );

};
