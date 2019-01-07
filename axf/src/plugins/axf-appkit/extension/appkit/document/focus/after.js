// ax.extension.appkit.document.focus.after = function( element ) {
//
//   let elements = Array.from( document.querySelectorAll( '*' ) )
//
//   // start search at last child element
//   element = element.$$('*')().slice(-1)[0] || element
//
//   let index = elements.indexOf( element )
//   let count = elements.length
//   let target
//   let tabable
//
//   let i = index
//   do {
//     i++
//     if ( i === count ) i = 0
//     if ( i === index ) return element
//     target = elements[ i ]
//     tabable = target.tabIndex >= 0 && (   ax.x.appkit.lib.element.visible( target ) )
//   } while ( !tabable );
//
//   target.focus()
//
//   return target
//
// }
