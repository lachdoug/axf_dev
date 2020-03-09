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

  let trueLabel = options.trueLabel || '✔ True'
  let falseLabel = options.falseLabel || '❌ False'

  return a['|appkit-report-control'](
    a['|appkit-report-boolean'](
      options.value ? trueLabel : falseLabel,
      options.booleanTag,
    ),
    controlTagOptions
  )

}
