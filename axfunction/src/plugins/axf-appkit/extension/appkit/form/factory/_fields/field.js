ax.extension.appkit.form.factory.
field = (f) => function( nameOrOptions={}, options={} ) {

  if ( typeof nameOrOptions === "string" ) {
    options.name = nameOrOptions
  } else {
    options = nameOrOptions
  }

  let a = ax.a
  let x = ax.x
  let field = x.appkit.form.factory.field

  let component = [
    field.caption( options ),
    field.help( options.help ),
    field.input(f)( options ),
    field.hint( options.hint ),
  ]

  if ( options.dependent !== false ) {
    component = field.dependent( component, options.dependent )
  }

  return a["appkit-form-field"]( component, options.fieldTag )

}
