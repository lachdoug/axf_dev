AxFrameworkExtensionsFormBuilder.prototype.basic = function(
  name,
  primaryType,
  secondaryType,
  options={}
) {

  // var fieldOptions = options;



//   Object.assign(
//     {
//
//       type: secondaryType
//     },
//     options
//   );
// debugger

var inputOptions = Object.assign(
  {
    value: options.value,
    type: options.type || secondaryType,
    id: options.id,
    pattern: options.pattern,
    required: options.required,
    readonly: options.readonly,
    disabled: options.disabled,
    multiple: options.multiple,
    checked: options.checked,
    attributes: options.input || {},
  },
  //  || {}
)

// debugger
  // if ( primaryType === "input" ) {
  //   fieldOptions.type = fieldOptions.type || secondaryType
  // };
  //   return this.input( name, fieldOptions );
  // } else {
    return this[primaryType]( name, inputOptions );
  // };

};
