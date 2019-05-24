ax.extension.codemirror.report.code.toolbar = function(
  options={}
) {

  let a = ax.a

  return a['appkit-report-codemirror-code-toolbar'](
    [
      a['appkit-report-codemirror-code-mode'](
        a.label( options.mode ),
      ),
      a['appkit-report-codemirror-code-toolbar-right'](
        a['appkit-report-codemirror-code-fullscreen'](
          a.button( { $text: "🗖" }, {
            type: "button",
            $on: {
              'click: toggle full screen': function() {
                let container = this.$( "^appkit-report-codemirror-code" )
                let editor = container.$("appkit-report-codemirror-code-editor")
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
