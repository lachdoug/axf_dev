ax.extensions.form.basic = function(
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

var inputOptions = {
  value: options.value,
  type: secondaryType,
  pattern: options.pattern,
  required: options.required,
  readonly: options.readonly,
  disabled: options.disabled,
  invalid: options.invalid,
  attributes: options.input,
  collection: options.collection,
  placeholder: options.placeholder,
  multiple: options.multiple,
};

// debugger
  // if ( primaryType === "input" ) {
  //   fieldOptions.type = fieldOptions.type || secondaryType
  // };
  //   return this.input( name, fieldOptions );
  // } else {
    return this[primaryType]( name, inputOptions );
  // };

};
