ax.extension.list = function( object, options={} ) {

  let a = ax.a
  let x = ax.x

  let functions = options.functions || false

  return a['|appkit-list'](
    x.list.element( object ),
    options.listTag
  )

}
