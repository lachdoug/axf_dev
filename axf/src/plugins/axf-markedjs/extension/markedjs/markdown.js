ax.extension.markedjs.markdown = function ( options={} ) {

  let a = ax.a

  let content = options.markdown || ''
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

  return a['div|axf-markedjs-markdown']( a( html ), options.markdownTag )

}
