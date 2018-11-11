// options.value
// options.required
// options.mode

AxFunction.Extensions.Appkit.FormFactory.CustomFields.prototype.codemirror = function(
  name,
  options
) {

  var a = this.a;
  var x = this.x;
  var f = this.f;

  return a.codemirror(
    [
      a.toolbar(
        [
          a.modewrap( [ a.vertical(), a.mode() ] ),
          a.button( x.icon( "fa fa-arrows-alt" ), { type: "button" } )
        ],
        {
          onclick: function() {
            var container = this.closest( "codemirror" );
            var menubuttons = this.querySelector( "toolbar buttons" );
            var editor = container.querySelector("editor");
            var codemirror = editor.querySelector("textarea").$codemirror;
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
              editor.style.height = "calc(100% - 35px)";

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
            attributes: {
              style: "display: none",
              $dependentValue: function() {
                return this.$codemirror.getValue();
              },
              $init: function() {
                this.$codemirror = CodeMirror.fromTextArea( this, {
                  lineNumbers: true,
                } );

                this.$codemirror.on("change", function(codemirror){
                  codemirror.getTextArea().$setRequired();
                  codemirror.getTextArea().oninput(); // to trigger dependent fields
                });

                this.$codemirror.setSize("100%", "100%");
                this.$setMode();
                this.$setRequired();

                this.$codemirror.on("keyup", function( codemirror, e ) {
                  // // Allow shift-tab to toggle tab key behaviour.
                  // // This is a crude way to allow user to get
                  // // normal tab key behaviour of tab-to-next clickable element.
                  // if (e.shiftKey && e.keyCode == 9) {
                  //   if ( ( codemirror.getOption( "extraKeys" ) || {} ).Tab === false ) {
                  //     codemirror.setOption( "extraKeys", {} );
                  //   } else {
                  //     codemirror.setOption( "extraKeys", { Tab: false } );
                  //   };
                  // };

                  codemirror.getTextArea().$setRequired();
                  codemirror.getTextArea().oninput(); // to trigger dependent fields

                });

              },
              $setRequired: function () {
                var value = this.$codemirror.getValue();
                var textarea = this.
                  closest( "editor" ).
                  querySelector( ".CodeMirror textarea" )
                if ( !value && options.required ) {
                  textarea.required = true;
                } else {
                  textarea.required = false;
                };
              },
              $setMode: function ( mode ) {
                // debugger
                var bestMode = mode === "" ? mode : ( mode || this.$selectedMode || options.mode || "" );
                this.$selectedMode = bestMode;
                // debugger;
                if ( this.$codemirror ) {
                  this.$codemirror.setOption( "mode", bestMode );
                  this.
                    closest("codemirror").
                    querySelector("toolbar mode").
                    $text = this.$codemirror.getOption("mode");
                };
              },
            },
          }
        )
      )
    ],
    {
      $setMode: function( mode ) {
        this.querySelector("textarea").$setMode( mode );
      },

      $labelOnclick: function (e) {
        if ( e.target.closest("label") === this ) {
          this.querySelector("textarea").$codemirror.focus();
          return false;
        } else {
          return true;
        };
      },

    }
  );

};
