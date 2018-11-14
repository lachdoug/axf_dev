ax.extensions.lib.css = function( styles, scope ) {

  return typeof styles === "string" ? styles : this.css.rules( styles, scope ? [ scope ] : [] )

}
