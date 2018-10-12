ax.extensions.markedjs = function ( content, options={} ) {

  var a = ax.a;

  var html;

  var processMarkdown = function( string ) {
    string = ( string || '').toString();
    if ( options.inline ) {
      return marked.inlineLexer( string, [] );
    } else {
      return marked( string );
    };
  };

  if ( content instanceof Array ) {
    var result = [];
    content.forEach( function( item ) {
      result.push( processMarkdown( item ) )
    } );
    html = result.join('');
  } else {
    html = processMarkdown( content );
  };

  var markdownTag = Object.assign( { '$html': html }, options.markdownTag || {} );

  return a.markdown( null, markdownTag );

};
ax.extensions.md = ax.extensions.markedjs
