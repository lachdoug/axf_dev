// Options
// attributes - <input> tag attributes
// value - field value

AxFrameworkExtensionsFormBuilder.prototype.textarea = function( name, options = {} ) {

	var attributes;

	var a = this.axFramework.tags;

	attributes = Object.assign(
		{
			name: name,
			id: options.id,
			required: options.required,
			readonly: options.readonly,
			disabled: options.disabled,
	    _dependentValue: function() {
	      return this.value;
			},
			_labelOnclick: function(e) {

				var input = this.querySelector("textarea");
				if ( e.target === input ) {
					// input.click()
					return true;
				} else {
					input.focus();
					return false;
				};

			},
			oninput: function(e) {
				this.closest("field") && this.closest("field")._fieldChanged();
			},
	  },
		options.attributes || {}
	);

	return a.textarea( options.value, attributes )

};
