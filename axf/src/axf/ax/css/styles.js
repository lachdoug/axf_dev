ax.css.styles = function ( styles ) {

  if ( ax.is.string( styles ) ) {
    return styles
  } else {
    return this.styles.rules( styles )
  }

}
