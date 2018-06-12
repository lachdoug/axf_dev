AxBuilderExtensionsFormBuilder.prototype.textarea = function( name, options = {} ) {

	var geneOptions;

	var a = this.cellBuilder.tagBuilder;
// debugger
	geneOptions = Object.assign(
		{
			name: name,
			id: options.id,
			required: options.required,
	    _dependentValue: function() {
	      return this.value;
			},
			oninput: function(e) {
				this.closest("field")._fieldChanged();
			},
	  },
		( options.textarea || {} )
	);

	return a.textarea( options.value, geneOptions )

};
