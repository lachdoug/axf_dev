// ax.extension.report.field.nest.shim.nest.items.
// down = function( f, options ) {
//
//   return f.button( {
//     label: '⏷',
//     onclick: function (e,el) {
//       var target = options.itemTarget ? options.itemTarget(el) : el.$('^|appkit-report-nest-item')
//       var next = target.nextSibling
//       var parent = target.parentElement
//       if ( next ) {
//         parent.insertBefore( target, next.nextSibling )
//         this.$send( 'axf.appkit.report.nest.item.move' )
//       }
//     },
//     ...options
//   } )
//
// }
