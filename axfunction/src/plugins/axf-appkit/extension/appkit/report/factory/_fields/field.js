ax.extension.appkit.report.factory.
field = (r) => function( nameOrOptions={}, options={} ) {

  if ( typeof nameOrOptions === "string" ) {
    options.name = nameOrOptions
  } else {
    options = nameOrOptions
  }

  let a = ax.a
  let x = ax.x
  let field = x.appkit.report.factory.field

  let component = [
    field.caption( options ),
    field.help( options.help ),
    field.output(r)( options ),
    field.hint( options.hint ),
  ]

  if ( options.dependent !== false ) {
    component = field.dependent( component, options.dependent )
  }

  return a["appkit-report-field"]( component, options.tag )

}
