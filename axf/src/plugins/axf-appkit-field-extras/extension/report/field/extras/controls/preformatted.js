ax.extension.report.field.extras.controls.
preformatted = ( r, options={} ) => {

  let a = ax.a
  let x = ax.x

  // let preformattedOptions = {
  //   // name: options.name,
  //   // value: options.value,
  //   // placeholder: options.placeholder,
  //   ...options,
  //   ...options.preformatted
  // }

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

  let component

  if ( options.value ) {
    component = a.pre( options.value || '', options.preTag )
  } else {
    component = a.span( ( options.placeholder || 'None' ), { class: 'placeholder'} )
  }

  return a['|appkit-report-control'](
    a['|appkit-report-preformatted'](
      component,
      options.preformattedTag
    ),
    controlTagOptions
  )

}
