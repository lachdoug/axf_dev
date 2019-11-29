/**
 * Creates an HTML element.
 * If options.target is supplied, the element will replace the target in the DOM,
 * or append or prepend to target if options.insert is 'append' or 'prepend'.
 *
 * @since 0.0.0
 * @namespace
 *
 * @param {component} component an ax component
 * @param {object} options
 *
 * @return {htmlElement} The new element
 */
let ax = function ( component=null, options={} ) {

  let element = ax.factory( component )
  let target = options.target

  if ( target ) {
    if ( ax.is.string( target ) ) target = document.querySelector( target )
    if ( options.insert ) {
      target[`${ options.insert }Child`]( element )
    } else {
      target.replaceWith( element )
    }
  } else if ( target != false ) {
    document.body.appendChild( element )
  }

  return element

}
