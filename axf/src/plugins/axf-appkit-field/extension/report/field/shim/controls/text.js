ax.extension.report.field.shim.controls.
text = ( r, options={} ) => {

  let a = ax.a
  let x = ax.x

  let textOptions = {
    ...options,
    ...options.text
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
    r.text( textOptions ),
    controlTagOptions
  )

}
