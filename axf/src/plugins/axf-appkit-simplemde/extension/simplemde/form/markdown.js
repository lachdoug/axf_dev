ax.extension.simplemde.form.markdown = function(
  f, options
) {

  let a = ax.a
  // let f = this.factory

  let toolbarIcons = [
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
  ]

  return a['appkit-form-simplemde-markdown'](
    f.textarea( {
        name: options.name,
        value: options.value,
        ...options.textareaTag,
    } ),
    {

      $init: function() {
        this.$setup()
      },

      $setup: function() {

        this.$simplemde = new SimpleMDE( {
          element: this.$('textarea'),
          toolbar: toolbarIcons,
          placeholder: options.placeholder,
          autoDownloadFontAwesome: false,
        } )

        // Set required attribute on the CodeMirror textarea
        let checkRequired = ( value ) => {
          let textarea = this.$( "^appkit-form-simplemde-markdown .CodeMirror textarea" )
          if ( options.required && !value ) {
            // debugger
            textarea.required = options.required
          } else {
            textarea.removeAttribute( 'required' )
          }
        }

        checkRequired( options.value )

        this.$refresh()

        this.$simplemde.codemirror.on("change", (e) => {
          checkRequired( this.$simplemde.value() )
        })

      },
      $refresh: function () {
        setTimeout( function() {
          this.$simplemde.codemirror.refresh()
        }.bind( this ), 1 )
      },
      $value: function() {
        // Initial value is needed by dependent fields, before simplemde is setup.
        return this.$simplemde ? this.$simplemde.value() : options.value
      },
      $disable: function() {
        this.$$('textarea').setAttribute('disabled', 'disabled')
      },
      $enable: function() {
        this.$refresh()
        this.$$('textarea').removeAttribute('disabled')
      },
      $focus: function () {
        this.$simplemde.codemirror.focus()
      },

      $on: {
        'keyup: check field depenencies': function(e) {
          let form = this.$('^form')
          if ( form ) { form.$dependencies() }
        },
        'keydown: check for editor exit': function(e) {

          if ( this.$( "div.CodeMirror" ).classList.contains( "CodeMirror-fullscreen" ) ) {
            // SimpleMDE closes fullscreen when ESC pressed.
            this.$simplemde.codemirror.focus()
          } else {

            if ( e.target.nodeName === "TEXTAREA" ) {

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

        },

      },

      ...options.markdownTag
    }
  )

}
