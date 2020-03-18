ax.extension.output = function( object, options={} ) {

  let a = ax.a
  let x = ax.x

  let functions = options.functions || false

  return a['|appkit-output'](
    x.output.element( object ),
    options.outputTag
  )

}
