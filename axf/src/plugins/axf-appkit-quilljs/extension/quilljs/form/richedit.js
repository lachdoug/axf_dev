ax.extension.quilljs.form.richedit = function(
  f, options
) {

  let a = ax.a
  let x = ax.x

  return a['appkit-form-quilljs-richedit']( [
    a['appkit-form-quilljs-richedit-container']( a( options.value || '' ), {

      $on: {
        'keyup: check field depenencies': function(e) {
          let form = this.$('^form')
          if ( form ) { form.$dependencies() }
          this.$('^').$focus()
        },
        'keydown: check for editor exit': function(e) {

          if ( e.keyCode == 9 && e.altKey && e.shiftKey ) {
            // alt+shift+TAB pressed - move focus to last button on toolbar
            this.$('^appkit-form-quilljs-richedit').$$('appkit-form-quilljs div.ql-toolbar button')().slice(-1)[0].focus()
          }

          if ( e.keyCode == 27 ) {
            // ESC pressed - move focus forward
            ax.x.appkit.lib.tabable.next( this ).focus()
          }

        },
      },

    } ),
    a['appkit-form-quilljs-richedit-textarea']( a.textarea( {
      name: options.name,
      // value: options.value,
      disabled: options.disabled,
      required: options.required,
      tabIndex: -1,
    } ) ),
    // a['appkit-form-quilljs-richedit-textarea']
  ], {
    $value: function() {
      let value
      if ( this.$quill ) {
        value = this.$quill.getContents()
      } else {
        ax.throw("Quill not initialized.")
        options.value
      }
      if ( JSON.stringify( value ) === "{\"ops\":[{\"insert\":\"\\n\"}]}" ) {
        value = ""
      }
      console.log( value )
      return value
    },
    $init: function() {
      let container = this.$('appkit-form-quilljs-richedit-container')
      this.$quill = new Quill( container, {
        modules: {
          toolbar: [
            ['bold', 'italic'],
            ['link', 'blockquote', 'code-block', 'image'],
            [{ list: 'ordered' }, { list: 'bullet' }]
          ]
        },
        theme: options.theme || "snow",
        placeholder: options.placeholder,
        readOnly: options.readonly,
        ...options.quill
      } )

      // this.$quill.setText( options.value )
      this.$update()

      this.$quill.on('text-change', () => {
        // debugger
        this.$update()
      } )


    },

    $disable: function() {
      // this.$quill.disable()
      this.$('textarea').setAttribute('disabled', 'disabled')
    },
    $enable: function() {
      if ( !options.disabled ) {
        // this.$quill.enable()
        this.$('textarea').removeAttribute('disabled')
      }
    },
    $focus: function() {
      this.$quill.focus()
    },

    $update: function () {
      let value = this.$value()
      let textarea = this.$( "appkit-form-quilljs-richedit-textarea textarea" )
      if ( value ) {
        textarea.value = JSON.stringify( { text: this.$quill.getText(), ...value } )
      } else {
        textarea.value = ''
      }
    },
    ...options.quilljsTag
  } )

}
