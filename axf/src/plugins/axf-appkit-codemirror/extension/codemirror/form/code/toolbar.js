ax.extension.codemirror.form.code.toolbar = function(
  f, options={}
) {

  let a = ax.a

  return a['appkit-form-codemirror-code-toolbar'](
    [
      this.mode( f, options.mode ),
      a['appkit-form-codemirror-code-toolbar-right'](
        a['appkit-form-codemirror-code-fullscreen'](
          a.button( { $text: "🗖" }, {
            type: "button",
            $on: {
              'click: toggle full screen': function() {
                let container = this.$( "^appkit-form-codemirror-code" )
                let editor = container.$("appkit-form-codemirror-code-editor")
                let codemirror = editor.$("textarea").$codemirror
                if ( container.classList.contains( "fullscreen" ) ) {
                  this.$text = "🗖"
                  container.classList.remove("fullscreen")
                  editor.style.height = ""
                  codemirror.focus()
                } else {
                  this.$text = "🗗"
                  container.classList.add("fullscreen")
                  codemirror.focus()
                }
              }
            }
          } )
        )
      ),
    ],
  )

}
