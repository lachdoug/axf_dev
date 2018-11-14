ax.extension.codemirror.form.code.editor = function(
  f, options={}
) {

  let a = ax.a

  return a['appkit-form-codemirror-code-editor'](
    f.textarea(
      {
        name: options.name,
        value: options.value,
        textareaTag: {
          style: "display: none",
          $init: function() {

            this.$codemirror = CodeMirror.fromTextArea( this, {
              lineNumbers: true,
            } )

            this.$codemirror.on("change", function(codemirror){
              codemirror.getTextArea().$setRequired()
            })
// debugger
            this.$( "^appkit-form-codemirror-code" ).$setMode()

            this.$codemirror.setSize("100%", "100%")
            this.$codemirror.refresh()

            this.$setRequired()

            this.$codemirror.on("keyup", function( codemirror, e ) {
              codemirror.getTextArea().$setRequired()
            })

          },
          $setRequired: function () {
            let value = this.$codemirror.getValue()
            let textarea = this.
              closest( "appkit-form-codemirror-code-editor" ).
              querySelector( ".CodeMirror textarea" )
            if ( !value && options.required ) {
              textarea.required = true
            } else {
              textarea.required = false
            }
          },
        },
      }
    ),
    {
      $on: {
        'keyup: ESC to exit': function(e) {

          let container = this.$( "^appkit-form-codemirror-code" )

          if ( container.classList.contains( "fullscreen" ) ) {
            // Close fullscreen if ESC pressed
            if (e.keyCode == 27) {
              container.$('appkit-form-codemirror-code-fullscreen button').click()
            }
          } else {
            // Remove focus if ESC pressed
            if (e.keyCode == 27) {
              container.$("appkit-form-codemirror-code-editor textarea").$codemirror.getInputField().blur()
            }
          }

        }
      }
    }
  )

}
