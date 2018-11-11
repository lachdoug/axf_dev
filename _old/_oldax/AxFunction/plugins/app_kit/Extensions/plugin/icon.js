AxFunction.Extensions.prototype.icon = function( iconClass, sometext, options = {} ) {

// Options:
// tag: tagOptions added to fontawesome tag.
// itag: tagOptions added to i.
// spanTag: tagOptions added to span.
// reverse: true to put icon after text.
// compact: true to have no space between icon and text.

  var a = this.axFunction.tags;
// reverse
  var components = [
    a.span( { class: iconClass } )
  ];

  if ( sometext ) {
    if ( !options.compact ) components.push( " " );
    components.push( a.span( sometext ) );
  };

  if ( options.reverse ) {
    components.reverse();
  };

  return a.icon( components, options.tag );

};

// alias
// AxFunction.Extensions.prototype.icon = AxFunction.Extensions.prototype.fontawesome;
