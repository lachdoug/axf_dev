ax.css = function ( styles, options={} ) {

  ax.insert(
    'head',
    'style',
    this.css.styles( styles ),
    { tag: options.styleTag }
  )

  return null

}
