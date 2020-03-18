ax.extension.report.field.extras.controls.
number = ( r, options={} ) => {

  let a = ax.a
  let x = ax.x

  let value = options.value
  let component

  if ( value ) {
    component = Number( value )
  } else {
    component = a.span(
      options.placeholder || 'None',
      { class: 'placeholder' }
    )
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
    a['|appkit-report-number'](
      component,
      options.numberTag
    ),
    controlTagOptions
  )

}
