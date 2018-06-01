AcellBuilderExtensionsFormBuilder.prototype.textarea = function( name, options = {} ) {

	var geneOptions;

	var a = this.cellBuilder.tagBuilder;

	geneOptions = Object.assign(
		{
			name: name,
			id: options.id,
			required: options.required,
	    _dependentValue: function() {
	      return this.value;
			},
			oninput: function(e) {
				this.closest("dependentfield")._fieldChanged();
			},
	  },
		( options.textarea || {} )
	);

	return a.textarea( options.value, geneOptions )

};
