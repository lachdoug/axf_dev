ax.extension.appkit.form.factory.
field = (f) => function( keyOrOptions={}, options={} ) {

  if ( ax.type.is.string( keyOrOptions ) ) {
    options.key = keyOrOptions
  } else {
    options = keyOrOptions
  }

  let a = ax.a
  let x = ax.x
  let field = x.appkit.form.factory.field
  let lib = x.appkit.lib.field

  options.name = options.name || lib.name.assemble( ...f.scope, options.key )

  let component = a["appkit-form-field-body"]( [
    field.caption( options ),
    field.help( options.help ),
    field.input(f)( options ),
    field.hint( options.hint ),
  ], options.bodyTag )

  if ( options.dependent !== false ) {
    component = field.dependent(f)( component, options.dependent )
  }

  return a["appkit-form-field"]( component, {
    name: options.name,
    $match: function() {
      let dependent = this.$('appkit-form-field-dependent')
      if ( dependent ) {
        return dependent.$match()
      } else {
        return true
      }
    },
    $value: function() {
      return this.$('appkit-form-field-input > *').$value()
    },
    $focus: function() {
      this.$('appkit-form-field-input > *').$focus()
    },
    ...options.fieldTag
  } )

}
