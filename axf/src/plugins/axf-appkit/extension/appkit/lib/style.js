ax.extension.appkit.lib.style = function( styles, scope ) {

  if ( ax.type.is.array( styles ) ) {
    styles = styles.map( ( styles ) => this.style( styles ) ).join( "\n" )
  } else if ( ax.type.is.object( styles ) ) {
    styles = this.style.rules( styles, scope ? [ scope ] : [] )
  }

  return  styles

}
