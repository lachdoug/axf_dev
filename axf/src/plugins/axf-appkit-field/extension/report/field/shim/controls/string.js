ax.extension.report.field.shim.controls.
string = function( r, options ) {

  let a = ax.a

  let stringOptions = {
    // name: options.name,
    // value: options.value,
    // placeholder: options.placeholder,
    ...options,
    ...options.string
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
    r.string( stringOptions ),
    controlTagOptions
  )

}
