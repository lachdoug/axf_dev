// ax.extension.report.field.nest.shim.nest.items.
// remove = function( f, options ) {
//
//   let item = f.item || 'item'
//   let confirmation
//
//   if ( ax.is.false( options.confirmation ) ) {
//     confirmation = () => true
//   } else if ( ax.is.string( options.confirmation ) ) {
//     confirmation = ( target ) => confirm( options.confirmation )
//   } else if ( ax.is.function( options.confirmation ) ) {
//     confirmation = ( target ) => confirm( options.confirmation( target ) )
//   } else {
//     confirmation = () => confirm( `Are you sure that you want to remove this ${ item }?` )
//   }
//
//   return f.button( {
//     label: '✖',
//     onclick: function (e,el) {
//       var target = options.itemTarget ? options.itemTarget(el) : el.$('^|appkit-report-nest-item')
//       let confirmed = confirmation( target )
//       if ( confirmed ) {
//         let parent = target.parentElement
//         let index = Array.prototype.indexOf.call( parent.children, target )
//         target.remove()
//         let length = parent.children.length
//         parent.$send( 'axf.appkit.report.nest.item.remove', { detail: {
//           target: el,
//           index: index,
//           length: length,
//         } } )
//       }
//     },
//     ...options
//   } )
//
// }
