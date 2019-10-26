ax.extension.report.field.shim.controls.
output = function( r, options ) {

  let a = ax.a

  let outputTagOptions = {
    name: options.name,
    value: options.value,
    ...options.outputTag
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
    r.output( outputTagOptions ),
    controlTagOptions
  )

}
