ax.extension.report.factory.
output = function( options={} ) {

  let a = ax.a
  let x = ax.x

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
    x.output( options.value, {
      parse: options.parse,
      outputTag: options.outputTag,
    } ),
    controlTagOptions
  )

}
