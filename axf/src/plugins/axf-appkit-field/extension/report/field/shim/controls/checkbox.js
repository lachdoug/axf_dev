ax.extension.report.field.shim.controls.
checkbox = function( r, options ) {

  let a = ax.a

  let checkboxOptions = {
    // name: options.name,
    // value: options.value,
    //
    ...options,
    ...options.checkbox
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
    r.checkbox( checkboxOptions ),
    controlTagOptions
  )

}
