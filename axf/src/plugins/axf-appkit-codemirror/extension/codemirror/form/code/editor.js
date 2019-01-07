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
          // style: "display: none",
          $init: function() {
            this.$setup()
          },
          $refresh: function () {
            setTimeout( function() {
              this.$codemirror.refresh()
            }.bind( this ), 1 )
          },
          $setup: function() {

            this.$codemirror = CodeMirror.fromTextArea( this, {
              lineNumbers: true,
              placeholder: options.placeholder,
            } )

            // this.$codemirror.on("change", function(codemirror){
            //   codemirror.getTextArea().$required()
            // })

            this.$( "^appkit-form-codemirror-code" ).$setMode()

            this.$codemirror.setSize("100%", "100%")

            this.$required()
            this.$refresh()

            this.$codemirror.on("keyup", function( codemirror, e ) {
              codemirror.getTextArea().$required()

            })

          },
          $required: function () {
            let value = this.$codemirror.getValue()
            let textarea = this.$('^appkit-form-codemirror-code').$$('textarea')[1]
            if ( !value && options.required ) {
              // debugger
              textarea.setAttribute( 'required', true )

            } else {
              // debugger
              textarea.removeAttribute('required')
            }
          },
        },
      }
    ),
    {
      $on: {
        'keyup: check field depenencies': function(e) {
          let form = this.$('^form')
          if ( form ) { form.$dependencies() }
        },
        'keyup: update textarea value': function(e) {
          this.$('textarea').$codemirror.save()
        },
        'keydown: check for editor exit': function(e) {

          let container = this.$( "^appkit-form-codemirror-code" )

          if ( container.classList.contains( "fullscreen" ) ) {
            if (e.keyCode == 27) {
              // ESC pressed - close full screen
              container.$('appkit-form-codemirror-code-fullscreen button').click()
            }
          } else {

            if ( e.keyCode == 9 && e.altKey && e.shiftKey ) {
              // alt+shift+TAB pressed - move focus backward
              ax.x.appkit.lib.tabable.previous( e.target ).focus()
            }

            if ( e.keyCode == 27 ) {
              // ESC pressed - move focus forward
              ax.x.appkit.lib.tabable.next( e.target ).focus()
            }

          }

        }
      }
    }
  )

}
