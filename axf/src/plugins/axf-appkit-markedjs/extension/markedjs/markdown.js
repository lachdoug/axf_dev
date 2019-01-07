ax.extension.markedjs.markdown = function ( content, options={} ) {


  // if ( ax.type.is.function( markdown ) ) {
  //   markdown = markdown()
  // }

  let a = ax.a

  let html

  let processMarkdown = function( string ) {
    string = ( string || '').toString()
    if ( options.inline ) {
      return marked.inlineLexer( string, [] )
    } else {
      return marked( string )
    }
  }

  if ( content instanceof Array ) {
    let result = []
    content.forEach( function( item ) {
      result.push( processMarkdown( item ) )
    } )
    html = result.join('')
  } else {
    html = processMarkdown( content )
  }

  return a['axf-markedjs-markdown']( { '$html': html }, options.markdownTag )

}
