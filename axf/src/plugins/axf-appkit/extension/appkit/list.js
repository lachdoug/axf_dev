ax.extension.appkit.list = function( object, options={} ) {

  let a = ax.a
  let x = ax.x

  return a["appkit-list"](
    x.appkit.list.element( object ),
    options.listTag
  )

}
