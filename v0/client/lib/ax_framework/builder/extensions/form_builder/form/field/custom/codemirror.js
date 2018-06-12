AxBuilderExtensionsFormCustomFieldBuilder.prototype.codemirror = function(
	name,
	options
) {

  var a = this.cellBuilder.tagBuilder;
	var x = this.cellBuilder.extensionsBuilder;
  var f = this.formBuilder;

  return a.codemirror(
		[
			a.toolbar(
				[
					a.mode(),
					a.button( x.fa( "arrows-alt" ), { type: "button" } )
				],
				{
					onclick: function() {
						var container = this.closest( "codemirror" );
						var menubuttons = this.querySelector( "toolbar buttons" );
						var editor = container.querySelector("editor");
						var codemirror = editor.querySelector("textarea")._codemirror;
						if ( container.style.position === "fixed" ) {
							// Unhide other CodeMirror fields
							var codemirrors = document.querySelectorAll("field .CodeMirror");
							for (var i = 0; i < codemirrors.length; ++i) {
								var codemirrorWrapper = codemirrors[i].closest("field");
								if ( codemirrorWrapper.querySelector( "codemirror" ) !==
											this.closest( "codemirror" ) ) {
									codemirrorWrapper.style.display = ""
								}
							};

							// Remove styling for fullscreen.
							container.style.position = "";
							container.style.top = "";
							container.style.left = "";
							container.style.right = "";
							container.style.bottom = "";
							container.style.border = "";
							container.style.borderRadius = "";
							container.classList.remove("fullscreen");
							editor.style.height = "";

							codemirror.refresh();
							codemirror.focus();

							container.onkeyup = (e) => {
								if (e.keyCode == 27) {
									this.closest("field").nextSibling.focus();
								};
							};

						} else {

							// Hide other CodeMirror fields.
							// Because multiple instances clash on fullscreen.
							var codemirrors = document.querySelectorAll("field .CodeMirror");
							for (var i = 0; i < codemirrors.length; ++i) {
								var codemirrorWrapper = codemirrors[i].closest("field");
								if ( codemirrorWrapper.querySelector( "codemirror" ) !==
											this.closest( "codemirror" ) ) {
									codemirrorWrapper.style.display = "none"
								}
							};

							// Set styling for full screen
							container.style.position = "fixed";
							container.style.top = "0";
							container.style.left = "0";
							container.style.right = "0";
							container.style.bottom = "0";
							container.style.border = "none";
							container.style.borderRadius = "0px";
							container.classList.add("fullscreen");
							editor.style.height = "100%";

							codemirror.refresh();
							codemirror.focus();

							// Close fullscreen if ESC pressed
							container.onkeyup = (e) => {
								if (e.keyCode == 27) {
									this.click();
								};
							};

						};
					}
				}
			),
			a.editor(
				f.textarea(
					name,
					{
						value: options.value,
						id: options.id + "_codemirror",
						textarea: {
							_dependentValue: function() {
								return this._codemirror.getValue();
					    },
							$init: function() {
// debugger
								this._codemirror = CodeMirror.fromTextArea( this, {
									lineNumbers: true,
									// readOnly: true,
								} );

								this._codemirror.on("change", function(codemirror){
									codemirror.getTextArea()._setRequired();
									codemirror.getTextArea().oninput(); // to trigger dependent fields
								});

								this._codemirror.setSize("100%", "100%");
								this._setMode();
								this._setRequired();

								this._codemirror.on("keyup", function( codemirror, e ) {
									// Allow shift-tab to toggle tab key behaviour.
									// This is a crude way to allow user to get
									// normal tab key behaviour of tab-to-next clickable element.
									if (e.shiftKey && e.keyCode == 9) {
										if ( ( codemirror.getOption( "extraKeys" ) || {} ).Tab === false ) {
											codemirror.setOption( "extraKeys", {} );
										} else {
											codemirror.setOption( "extraKeys", { Tab: false } );
										};
									};

									codemirror.getTextArea()._setRequired();
									codemirror.getTextArea().oninput(); // to trigger dependent fields

								});

							},
							_setRequired: function () {
								var value = this._codemirror.getValue();
								var textarea = this.
									closest( "editor" ).
									querySelector( ".CodeMirror textarea" )
								if ( !value && options.required ) {
									textarea.required = true;
								} else {
									textarea.required = false;
								};
							},
							_setMode: function ( mode ) {
								var mode = mode === "" ? mode : ( mode || this._selectedMode || options.mode || "" );
								this._selectedMode = mode;
								if ( this._codemirror ) {
									this._codemirror.setOption( "mode", mode );
									this.
										closest("codemirror").
										querySelector("toolbar mode").
										$text = this._codemirror.getOption("mode");
								};
							},
						},
					}
				)
			)
		]
  );

};
