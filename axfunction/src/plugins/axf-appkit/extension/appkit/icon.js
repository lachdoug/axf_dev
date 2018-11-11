ax.extension.appkit.icon = function( klass, text, options = {} ) {

// Options:
// tag: tagOptions added to fontawesome tag.
// itag: tagOptions added to i.
// spanTag: tagOptions added to span.
// reverse: true to put icon after text.
// compact: true to have no space between icon and text.

  var components = [
    ax.a.span( { class: klass } )
  ];

  if ( text ) {
    if ( !options.compact ) components.push( " " );
    components.push( ax.a.span( text ) );
  };

  if ( options.reverse ) {
    components.reverse();
  };

  return ax.a['appkit-icon']( components, options.tag );

};
