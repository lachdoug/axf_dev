ax.extension.appkit.lib.style = function( styles, scope ) {

  return typeof styles === "string" ? styles : this.style.rules( styles, scope ? [ scope ] : [] )

}
