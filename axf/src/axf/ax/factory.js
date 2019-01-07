/**
 * Component Factory.
 * The Component Factory turns Components into View Objects.
 *
 * @since 0.0.0
 * @namespace ax.factory
 *
 * @param {component} component
 *
 * @return {component} Being either an Element, Node or View Object.
 */
ax.factory = function( component ) {

  let is = ax.type.is
// debugger
  // if ( is.null( component ) ) return undefined
  if ( is.node( component ) ) return component
  if ( is.nodelist( component ) ) return ax.factory.nodelist( component )
  if ( is.array( component ) ) return ax.factory.array( component )
  if ( is.object( component ) ) return ax.factory.object( component )
  if ( is.function( component ) ) return ax.factory.function( component )
  return ax.factory.text( component )

}
