// options.value
// options.required
// options.mode

ax.extensions.form.factory.code = function() {
  return ax.extensions.form.factory.codemirror( ...arguments )
}

ax.extensions.form.factory.codemirror = function(
  // name,
  options
) {

  var a = ax.a;
  var x = ax.x;
  var f = this;

  // debugger

  return a['.codemirror'](
    [
      a['.toolbar'](
        [
          a['.modewrap']( [ a['.vertical'](), a['.mode']() ] ),
          a.button( x.icon( "fa fa-arrows-alt" ), { type: "button" } )
        ],
        {
          onclick: function() {
            var container = this.closest( ".codemirror" );
            // var menubuttons = this.querySelector( ".toolbar buttons" );
            var editor = container.querySelector(".editor");
            var codemirror = editor.querySelector("textarea").$codemirror;
            if ( container.style.position === "fixed" ) {
              // Unhide other CodeMirror fields
              // Because multiple instances clash on fullscreen.
              var codemirrors = document.querySelectorAll("field .CodeMirror");
              for (var i = 0; i < codemirrors.length; ++i) {
                var codemirrorWrapper = codemirrors[i].closest("field");
                if ( codemirrorWrapper.querySelector( ".codemirror" ) !==
                      this.closest( ".codemirror" ) ) {
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
                if ( codemirrorWrapper.querySelector( ".codemirror" ) !==
                      this.closest( ".codemirror" ) ) {
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
      a['.editor'](
        f.textarea(
          {
            name: options.name,
            value: options.value,
            textareaTag: {
              style: "display: none",
              $init: function() {
                this.$codemirror = CodeMirror.fromTextArea( this, {
                  lineNumbers: true,
                } );

                this.$codemirror.on("change", function(codemirror){
                  codemirror.getTextArea().$setRequired();
                  // codemirror.getTextArea().dispatchEvent( new Event( "change" ) ) // to trigger dependent fields
                });

                this.$codemirror.setSize("100%", "100%");
                this.$setMode();
                this.$setRequired();

                this.$codemirror.on("keyup", function( codemirror, e ) {
                  codemirror.getTextArea().$setRequired();
                  // codemirror.getTextArea().oninput(); // to trigger dependent fields

                });

              },
              $setRequired: function () {
                var value = this.$codemirror.getValue();
                var textarea = this.
                  closest( ".editor" ).
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
                  // debugger
                  this.
                    closest(".codemirror").
                    querySelector(".toolbar .mode").
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
        this.$('textarea')[0].$setMode( mode );
      },

      $value: function() {
        return $('textarea')[0].$codemirror.getValue();
      },
      $focus: function () {
        this.$('textarea')[0].$codemirror.focus()
      },
      $disable: function() {
        this.$('textarea')[0].$disable()
      },
      $enable: function() {
        if ( !options.disabled ) this.$('textarea')[0].$disable()
      },


      // $labelOnclick: function (e) {
      //   if ( e.target.closest("label") === this ) {
      //     this.querySelector("textarea").$codemirror.focus();
      //     return false;
      //   } else {
      //     return true;
      //   };
      // },

    }
  );

};
