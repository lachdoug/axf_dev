ax.extension.appkit.form.factory.many.items.
factory = (f, data, scope, layout ) => {

  let factory = ax.extension.appkit.form.factory( {
    data: data,
    scope: scope,
    layout: layout
  } )

  factory.remove = (f) => ax.extension.appkit.form.factory.many.remove( f )
  factory.moveup = (f) => ax.extension.appkit.form.factory.many.moveup( f )
  factory.movedown = (f) => ax.extension.appkit.form.factory.many.movedown( f )

  return factory

}
