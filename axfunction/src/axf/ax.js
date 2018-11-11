'use strict'
/**
 * Use ax() to create reactive web content.
 *
 *
 * @since 1.0.0
 * @global
 *
 * @param {(object|function|class|element|node|array|string|?)} component
 * @param {object} options
 *
 * @property {object} tags A namespace for the tags proxy.
 * The tags proxy interprets components like a.h1("Hi").
 * @property {function} renderer Writes components to the DOM.
 * @return {htmlElement} The new element
 */
let ax = function ( component, attributes ) {

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
