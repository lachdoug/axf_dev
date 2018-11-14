ax.extension.appkit.icon = function( klass, text, options = {} ) {

// Options:
// tag: tagOptions added to fontawesome tag.
// itag: tagOptions added to i.
// spanTag: tagOptions added to span.
// reverse: true to put icon after text.
// compact: true to have no space between icon and text.

  var component = [
    ax.a.span( { class: klass } )
  ]

  if ( text ) {
    if ( !options.compact ) component.push( " " )
    component.push( ax.a.span( text ) )
  }

  if ( options.reverse ) {
    component.reverse()
  }

  return ax.a['appkit-icon']( component, options.tag )

}
