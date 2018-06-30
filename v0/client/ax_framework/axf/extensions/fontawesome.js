AxFrameworkExtensions.prototype.fontawesome = function( faClass, sometext, options = {} ) {

// Options:
// tag: tagOptions added to fontawesome tag.
// itag: tagOptions added to i.
// spanTag: tagOptions added to span.
// reverse: true to put icon after text.
// compact: true to have no space between icon and text.

  var a = this.axFramework.tags;
// reverse
  var components = [
    a.i( { class: "fa fa-" + faClass } )
  ];

  if ( sometext ) {
    if ( !options.compact ) components.push( " " );
    components.push( a.span( sometext ) );
  };

  if ( options.reverse ) {
    components.reverse();
  };

  return a.fontawesome( components, options.tag );

};

// .btn alias
AxFrameworkExtensions.prototype.fa = AxFrameworkExtensions.prototype.fontawesome;
