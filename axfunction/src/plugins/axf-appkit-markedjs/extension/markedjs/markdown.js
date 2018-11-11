ax.extension.markedjs.markdown = function ( markdown, options={} ) {

  let a = ax.a

  if ( typeof markdown === 'function' ) {
    markdown = markdown()
  }

  if ( options.inline ) {
    html =  marked.inlineLexer( markdown, [] )
  } else {
    html =  marked( markdown )
  }

  return a['axf-markedjs-markdown']( { '$html': html, ...options.markdownTag } )

}
