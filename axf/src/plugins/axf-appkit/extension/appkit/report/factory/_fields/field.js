ax.extension.appkit.report.factory.
field = (r) => function( keyOrOptions={}, options={} ) {

  if ( ax.type.is.string( keyOrOptions ) ) {
    options.key = keyOrOptions
  } else {
    options = keyOrOptions
  }

  let a = ax.a
  let x = ax.x
  let field = x.appkit.report.factory.field
  let lib = x.appkit.lib.field

  let name = lib.name.assemble( ...r.$scope, options.key )

  let component = a["appkit-report-field-body"]( [
    field.caption( options ),
    field.help( options.help ),
    field.output(r)( options ),
    field.hint( options.hint ),
  ], options.bodyTag )

  if ( options.dependent !== false ) {
    component = field.dependent(r)( component, options.dependent )
  }

  return a["appkit-report-field"]( component, {
    name: name,
    $match: function() {
      let dependent = this.$('appkit-report-field-dependent')
      if ( dependent ) {
        return dependent.$match()
      } else {
        return true
      }
    },
    $value: function() {
      return this.$('appkit-report-field-output > *').$value()
    },

    ...options.fieldTag
  } )

}
