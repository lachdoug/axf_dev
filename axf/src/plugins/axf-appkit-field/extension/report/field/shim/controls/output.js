ax.extension.report.field.shim.controls.
output = function( r, options={} ) {

  let a = ax.a
  let x = ax.x

  let outputOptions = {
    ...options,
    ...options.output
  }

  let controlTagOptions = {

    'data-name': options.name,
    tabindex: 0,
    $value: function() {
      return options.value
    },
    $focus: function () {
      this.focus()
    },

    ...options.controlTag,


  }

  return a['|appkit-report-control'](
    r.output( outputOptions ),
    controlTagOptions
  )

}
