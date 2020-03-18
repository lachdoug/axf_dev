ax.extension.report.field.shim.controls.
radios = function( r, options ) {

  let a = ax.a

  let radiosOptions = {
    ...options,
    ...options.radios
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
    r.radios( radiosOptions ),
    controlTagOptions
  )

}
