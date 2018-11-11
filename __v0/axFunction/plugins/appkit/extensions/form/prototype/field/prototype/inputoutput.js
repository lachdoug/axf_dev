ax.extensions.form.inputoutput = function(
  name,
  options
) {

  var a = this.axFunction.tags;
  var x = this.axFunction.extensions;
  var f = this.factory;

  var outputValue = options.output || function( inputValue ) {
    return inputValue;
  }

  var inputOptions = {
    value: options.value,
    type: options.type,
    pattern: options.pattern,
    required: options.required,
    readonly: options.readonly,
    disabled: options.disabled,
    invalid: options.invalid,
    attributes: Object.assign(
      {
        oninput: function(e) {
          this.nextSibling.value = outputValue( this.value )
        },
      },
      options.input || {}
    ),

  };
// debugger
//   inputOptions.value = options.value;
//   inputOptions.type = options.type || "range";
//   inputOptions.attributes = Object.assign(
//     {
//     },
//     inputOptions.attributes
//   );

  return a.inputoutput( [
    f.input( name, inputOptions ),
    a.output( outputValue( options.value ), options.output ),
  ] );

};
