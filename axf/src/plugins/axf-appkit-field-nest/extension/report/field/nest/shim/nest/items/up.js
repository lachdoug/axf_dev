// ax.extension.report.field.nest.shim.nest.items.
// up = function( f, options ) {
//
//   return f.button( {
//     label: '⏶',
//     onclick: function (e,el) {
//       var target = options.itemTarget ? options.itemTarget(el) : el.$('^|appkit-report-nest-item')
//       var previous = target.previousSibling
//       var parent = target.parentElement
//       if ( previous ) {
//         parent.insertBefore( target, previous )
//         this.$send( 'axf.appkit.report.nest.item.move' )
//       }
//     },
//     ...options
//   } )
//
// }
