AxFunction.Extensions.prototype.markedjs = function ( content, options={} ) {

  var a = this.a;
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

  var attributes = Object.assign( { '$html': html }, options.attributes || {} );

  return a.markdown( null, attributes );

};
AxFunction.Extensions.prototype.md = AxFunction.Extensions.prototype.markedjs
