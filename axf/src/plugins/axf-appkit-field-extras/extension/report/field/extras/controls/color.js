ax.extension.report.field.extras.controls.
color = ( r, options={} ) => {

  let a = ax.a

  let value = options.value
  let component

  if ( value ) {
    component = a.div( null, {
      style: {
        backgroundColor: options.value,
        height: '100%',
      },
    } )
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
    a['|appkit-report-color'](
      component,
      options.colorTag
    ),
    controlTagOptions
  )

}
