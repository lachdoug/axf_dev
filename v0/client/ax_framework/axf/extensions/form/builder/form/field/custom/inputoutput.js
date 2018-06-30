AxFrameworkExtensionsFormBuilderCustomFields.prototype.inputoutput = function(
	name,
	options
) {

  var a = this.axFramework.tags;
	var x = this.axFramework.extensions;
  var f = this.formBuilder;

	var outputValue = options.output || function( inputValue ) {
		return inputValue;
	}

	var inputOptions = options.input || {};

	inputOptions.value = options.value;
	inputOptions.type = options.type || "range";
	inputOptions.attributes = Object.assign(
		{
			oninput: function(e) {
				this.nextSibling.value = outputValue( this.value )
			}
		},
		inputOptions.attributes || {}
	);

	return a.inputoutput( [
		f.input( name, inputOptions ),
		a.output( outputValue( options.value ), ( options.output || {} ).attributes ),
	] );

};
