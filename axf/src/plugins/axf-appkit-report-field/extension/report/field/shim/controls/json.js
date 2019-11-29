ax.extension.report.field.shim.controls.
json = function( r, options ) {

  let a = ax.a

  let jsonOptions = {
    name: options.name,
    value: options.value,
    ...options.json
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
    r.json( jsonOptions ),
    controlTagOptions
  )

}
