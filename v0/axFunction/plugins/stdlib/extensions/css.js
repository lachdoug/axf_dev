// ax.extensions.css = function( styles, options={} ) {
//
//   var cssString = typeof styles === "string" ? styles : objectToRules( styles, options.scope ? [ options.scope ] : [] )
//
//   if ( options.head ) {
//     ax.extensions.lib.insert( 'head', 'style', cssString )
//     return null
//   } else {
//     return {
//       $type: 'style',
//       $text: cssString
//     }
//   }
//
// }

ax.extensions.css = function( styles, options={} ) {

  let a = ax.a
  let x = ax.x

  return a.style( x.lib.css( styles, options.scope ), options.styleTag )

}
