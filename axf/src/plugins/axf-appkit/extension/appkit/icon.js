ax.extension.appkit.icon = function( klass, text, options = {} ) {

// Options:
// tag: tagOptions added to fontawesome tag.
// itag: tagOptions added to i.
// spanTag: tagOptions added to span.
// reverse: true to put icon after text.
// compact: true to have no space between icon and text.

  let a = ax.a
  let x = ax.x

  var component = [
    ax.a.span( { class: klass } )
  ]
// debugger
  if ( text ) {
    if ( !options.compact ) component.push( '' )
    component.push( ax.a.span( text ) )
  }

  if ( options.reverse ) {
    component.reverse()
  }

  let iconTag = {
    style: { whiteSpace: 'nowrap' },
    ...options.iconTag
  }

  return ax.a['appkit-icon']( component, iconTag )

}
