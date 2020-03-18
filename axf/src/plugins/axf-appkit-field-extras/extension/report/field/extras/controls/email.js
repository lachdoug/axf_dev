ax.extension.report.field.extras.controls.
email = ( r, options={} ) => {

  let a = ax.a
  let x = ax.x

  let value = options.value
  let component

  if ( value ) {
    component = a.a( value, { href: `mailto: ${ value }` } )
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
    a['|appkit-report-email'](
      component,
      options.emailTag
    ),
    controlTagOptions
  )

}
