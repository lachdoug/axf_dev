ax.extension.codemirror.report.control.editor = function(
  options={}
) {

  let a = ax.a

  return a['|appkit-report-codemirror-editor'](
    ax.a.textarea(
      options.value,
      {
        $init: function() {
          this.$codemirror = CodeMirror.fromTextArea( this, {
            lineNumbers: true,
            readOnly: true,
            mode: options.mode || '',
          } )
          this.$codemirror.setSize('100%', '100%')
          setTimeout( function() {
            this.$codemirror.refresh()
          }.bind( this ), 1 )
        }
      }
    )
  )

}
