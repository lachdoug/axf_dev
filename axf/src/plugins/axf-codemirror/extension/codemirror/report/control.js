ax.extension.codemirror.report.control = function(
  r, options={}
) {

  let a = ax.a
  let x = ax.x
  let report = x.codemirror.report

  return a['|appkit-form-control'](

    a['|appkit-report-codemirror'](
      [
        report.control.toolbar( options ),
        report.control.editor( options ),
      ],
      {

        name: options.name,

        $value: function() {
          return options.value
        },

        ...options.codeTag

      }
    ),

    options.controlTag

  )



}
