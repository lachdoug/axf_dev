ax.extension.report.field.shim.controls.
boolean = function( r, options ) {

  let a = ax.a

  let outputOptions = {
    name: options.name,
    value: options.value,
    ...options.output
  }

  let controlTagOptions = {

    $value: function() {
      return options.value
    },

    $focus: function () {
      this.focus()
    },

    ...options.controlTag,

  }

  return a['|appkit-report-control'](
    a['|appkit-report-boolean'](
      options.value ? '✔ True': '❌ False',
      options.booleanTag,
    ),
    controlTagOptions
  )

}
