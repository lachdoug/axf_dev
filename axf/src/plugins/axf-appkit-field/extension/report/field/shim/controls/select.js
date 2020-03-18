ax.extension.report.field.shim.controls.
select = function( r, options ) {

  let a = ax.a

  let selectOptions = {
    // name: options.name,
    // value: options.value,
    // selections: options.selections,
    // placeholder: options.placeholder,
    ...options,
    ...options.select,
    // selectTag: {
    //   tabindex: 0,
    //   ...( options.select || {} ).selectTag,
    // }
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
    r.select( selectOptions ),
    controlTagOptions
  )

}
