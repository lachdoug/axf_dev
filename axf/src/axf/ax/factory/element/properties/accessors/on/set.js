// ax.factory.element.properties.accessors.on.
// set = function ( element, on ) {
//
//   for ( let event in on ) {
//     element.$off( event )
//     element.$events[ event ] = on[ event ]
//     element.addEventListener(
//       event.split(':')[0],
//       element.$events[ event ]
//     )
//   }
//
//   return element
//
// }
