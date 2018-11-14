ax.extension.appkit.put = function( object, options={} ) {
  return ax.a.pre( JSON.stringify( object, null, options.indent || 2 ) )
}
