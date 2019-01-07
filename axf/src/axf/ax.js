/**
 * Creates an HTML element and inserts it in the DOM.
 * The element is described by a component and any accompanying attributes.
 * If the element has an `id`, it will replace an existing
 * DOM element that has the same `id`.
 * If the element does not have a matching `id`,
 * the element will be appended to the &lt;body&gt;.
 *
 * @since 0.0.0
 * @namespace
 *
 * @param {component} component any Component
 * @param {object} attributes to be applied to the component
 *
 * @return {htmlElement} The new element
 */
let ax = function ( component, attributes ) {

// debugger

  let target

  if ( attributes ) {
    if ( ! ( component instanceof Array ) ) { component = [ component ] }
    component = { $nodes: component, ...attributes }
  }

  let element = ax.factory( component )

  if ( component.id ) {
    document.querySelector( '#' + component.id ).
      replaceWith( element )
  } else {
    document.body.appendChild( element )
  }

  return element

}


// let ax = function ( component, attributes ) {
//
//   let target
//
//
//
//   if ( attributes ) {
//     if ( !ax.type.is.array( component ) ) { component = [ component ] }
//     component = { $nodes: component, ...attributes }
//   }
// debugger
//   let element = ax.factory( component )
//
//   if ( ax.type.is.nodelist( element ) ) {
//     for ( let i of element ) {
//       // debugger
//       document.body.appendChild( element[0] )
//     }
//   } else {
//     // debugger
//     if ( component.id ) {
//       document.querySelector( '#' + component.id ).
//       replaceWith( element )
//     } else {
//       document.body.appendChild( element )
//     }
//   }
//
//   return element
//
// }
