ax.extension.form.field.shim.
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
      'click: focus on input': function() {
        let target = this.$( '^|appkit-form-field |appkit-form-control' )
        if ( target ) target.$focus()
      },
      ...( options.labelWrapperTag || {} ).$on,
    },

  }

  return a['|appkit-form-field-label-wrapper']( component, labelWrapperTag )

}
