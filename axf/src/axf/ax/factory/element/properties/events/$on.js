// ax.factory.element.properties.events.$on = function ( element ) {
//
//   if ( element.$properties.hasOwnProperty( '$on' ) ) {
//     for ( let event in element.$events ) {
//       element.addEventListener(
//         event.split(':')[0],
//         function(e) {
//           element.$events[ event ] &&
//           element.$events[ event ].
//             call( this, e, element, element.$state )
//         }
//       )
//     }
//   }
//
//   return element
//
// }
