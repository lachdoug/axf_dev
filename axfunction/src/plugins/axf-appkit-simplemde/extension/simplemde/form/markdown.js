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
    f.textarea(
      {
        name: options.name,
        value: options.value,
        textareaTag: {
          $value: function() {
            return this.$simplemde ? this.$simplemde.value() : options.value
          },
          $init: function() {

            this.$simplemde = new SimpleMDE( {
              element: this,
              toolbar: toolbarIcons,
              autoDownloadFontAwesome: false,
            } )

            // Set required attribute on the CodeMirror textarea
            let checkRequired = ( value ) => {
              let textarea = this.
                closest( "appkit-form-simplemde-markdown" ).
                querySelector( ".CodeMirror textarea" )
              if ( options.required && !value ) {
                textarea.required = options.required
              } else {
                textarea.removeAttribute( 'required' )
              }
            }

            checkRequired( options.value )

            this.$simplemde.codemirror.on("change", (e) => {
              checkRequired( this.$simplemde.value() )
              // Trigger input event to do dependent fields
              this.oninput()
            })

          },
        },
      }
    ),
  )

}
