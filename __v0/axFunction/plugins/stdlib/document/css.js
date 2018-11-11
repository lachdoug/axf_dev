ax.document.css = function( styles, options={} ) {


  // if ( options.head ) {
  ax.document.insert( 'head', 'style', ax.x.lib.css( styles, options.scope ) )
  //   return null
  // } else {
  //   return {
  //     $type: 'style',
  //     $text: cssString
  //   }
  // }

}
