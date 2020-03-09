ax.extension.quilljs.form.richedit = function(
  f, options
) {

  let a = ax.a
  let x = ax.x

  return a['|appkit-form-quilljs-richedit']( [
    a['|appkit-form-quilljs-richedit-container']( a( options.value || '' ), {

      $on: {
        'keyup: send control change event': (e,el) =>
          el.$send( 'axf.appkit.form.control.change' ),
        'keydown: check for editor exit': function(e) {

          if ( e.keyCode == 27 && e.shiftKey ) {
            // shift+ESC pressed - move focus backward
            ax.x.lib.tabable.previous( e.target ).focus()
          } else if ( e.keyCode == 27 ) {
            // ESC pressed - move focus forward
            ax.x.lib.tabable.next( e.target ).focus()
          }

        },
      },

    } ),
    a['|appkit-form-quilljs-richedit-textarea']( a.textarea( null, {
      name: options.name,
      // value: options.value,
      disabled: options.disabled,
      required: options.required,
      tabIndex: -1,
    } ) ),
    // a['|appkit-form-quilljs-richedit-textarea']
  ], {
    $value: function() {
      let value
      if ( this.$quill ) {
        value = this.$quill.getContents()
      } else {
        console.error('Quill not initialized.')
        options.value
      }
      if ( JSON.stringify( value ) === {\ops\:[{\insert\:\\\n\}]} ) {
        value = ''
      }
      console.log( value )
      return value
    },
    $data: function() {
      return this.$value()
    },
    $init: function() {
      let container = this.$('|appkit-form-quilljs-richedit-container')
      this.$quill = new Quill( container, {
        modules: {
          toolbar: [
            ['bold', 'italic'],
            ['link', 'blockquote', 'code-block', 'image'],
            [{ list: 'ordered' }, { list: 'bullet' }]
          ]
        },
        theme: options.theme || snow,
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
      let textarea = this.$( '|appkit-form-quilljs-richedit-textarea textarea' )
      if ( value ) {
        textarea.value = JSON.stringify( { text: this.$quill.getText(), ...value } )
      } else {
        textarea.value = ''
      }
    },
    ...options.quilljsTag
  } )

}
