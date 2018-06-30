AxFrameworkExtensionsFormBuilderCustomFields.prototype.simplemde = function(
	name,
	options
) {

  var a = this.axFramework.tags;
  var f = this.formBuilder;

	var toolbarIcons = [
		{
			name: "bold",
			action: SimpleMDE.toggleBold,
			className: "fa fa-bold",
			title: "Bold",
		},
		{
			name: "italic",
			action: SimpleMDE.toggleItalic,
			className: "fa fa-italic",
			title: "Italic",
		},
		{
			name: "heading",
			action: SimpleMDE.toggleHeadingSmaller,
			className: "fa fa-header",
			title: "Heading",
		},
		"|",
		{
			name: "quote",
			action: SimpleMDE.toggleBlockquote,
			className: "fa fa-quote-left",
			title: "Quote",
		},
		{
			name: "unordered-list",
			action: SimpleMDE.toggleUnorderedList,
			className: "fa fa-list-ul",
			title: "Generic List",
		},
		{
			name: "ordered-list",
			action: SimpleMDE.toggleOrderedList,
			className: "fa fa-list-ol",
			title: "Numbered List",
		},
		"|",
		{
			name: "link",
			action: SimpleMDE.drawLink,
			className: "fa fa-link",
			title: "Create Link",
		},
		{
			name: "image",
			action: SimpleMDE.drawImage,
			className: "fa fa-picture-o",
			title: "Insert Image",
		},
		{
			name: "table",
			action: SimpleMDE.drawTable,
			className: "fa fa-table",
			title: "Insert Table"
		},
		"|",
		{
			name: "preview",
			action: SimpleMDE.togglePreview,
			className: "fa fa-eye no-disable",
			title: "Toggle Preview",
		},
		{
			name: "side-by-side",
			action: SimpleMDE.toggleSideBySide,
			className: "fa fa-columns no-disable",
			title: "Toggle Side by Side",
		},
		{
			name: "fullscreen",
			action: SimpleMDE.toggleFullScreen,
			className: "fa fa-arrows-alt no-disable",
			title: "Toggle Fullscreen",
		}
	];

  return a.simplemde(
		f.textarea(
			name,
			{
				value: options.value,
				// required: options.required,
		    // id: options.id,
				attributes: {
					_dependentValue: function() {
			      return this._simplemde ? this._simplemde.value() : options.value;
			    },
					$init: function() {
						this._simplemde = new SimpleMDE( {
							element: this,
							toolbar: toolbarIcons,
							autoDownloadFontAwesome: false,
						} );
						// debugger;
						this.
							closest( "simplemde" ).
							querySelector( ".CodeMirror textarea" ).
							required = options.required;


						this._simplemde.codemirror.on("change", function(e){
							// debugger;
							e.getTextArea().oninput();
						});
					},
				},
			}
		),
		{
			_labelOnclick: function (e) {
				if ( e.target.closest("label") === this ) {
					this.querySelector("textarea")._simplemde.codemirror.focus();
					return false;
				} else {
					return true;
				};
			},
		}
  );

};
