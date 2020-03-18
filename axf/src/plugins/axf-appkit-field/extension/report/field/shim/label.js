ax.extension.report.field.shim.
label = function( options={} ) {

  let a = ax.a
  let x = ax.x
  let lib = x.lib

  if ( ax.is.boolean( options.label ) && !options.label ) return null

  let label = options.label || lib.text.labelize( options.key )
  let component = a.label( label, options.labelTag )

  let labelWrapperTag = {

    ...options.labelWrapperTag,

    $on: {
      'click: focus on output': function() {
        let target = this.$( '^|appkit-report-field |appkit-report-control' )
        target.$focus()
      },
      ...( options.labelWrapperTag || {} ).$on,
    },

  }

  return a['|appkit-report-field-label-wrapper']( component, labelWrapperTag )

}
