ax.extension.codemirror.code = function( content, options={} ) {
  return ax.a.textarea(
    content,
    {
      $init: function() {
        this.$codemirror = CodeMirror.fromTextArea( this, {
          lineNumbers: true,
          readOnly: true,
          mode: options.mode
        } )
        this.$codemirror.setSize("100%", "100%")
        setTimeout( function() {
          this.$codemirror.refresh()
        }.bind( this ), 1 )
      }
    }
  )
}
