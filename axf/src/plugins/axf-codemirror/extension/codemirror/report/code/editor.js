ax.extension.codemirror.report.code.editor = function(
  options={}
) {

  let a = ax.a

  return a['|appkit-report-codemirror-code-editor'](
    ax.x.codemirror.code(
      options.value,
      {
        mode: options.mode,
      }
    )

  )

}
