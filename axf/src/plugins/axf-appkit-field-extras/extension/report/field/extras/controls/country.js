ax.extension.report.field.extras.controls.
country = ( r, options={} ) => {

  let a = ax.a
  let x = ax.x

  let value = options.value
  let component

  if ( value ) {
    label = x.lib.locale.countries[value]
    if ( label ) {
      component = label
    } else {
      component = value
    }
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

  let selectOptions = {
    ...options,
    selections: x.lib.locale.countries,
    placeholder: options.placeholder || ' ',
    ...options.select
  }

  return a['|appkit-report-control'](
    a['|appkit-report-country'](
      component,
      options.countryTag
    ),
    controlTagOptions
  )

}
