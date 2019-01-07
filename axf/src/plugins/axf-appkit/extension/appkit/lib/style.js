ax.extension.appkit.lib.style = function( styles, scope ) {

  return ax.type.is.string( styles ) ? styles : this.style.rules( styles, scope ? [ scope ] : [] )

}
