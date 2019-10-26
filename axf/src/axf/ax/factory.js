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

  let is = ax.is
  let factory = ax.factory

  if ( is.null( component ) ) return null
  // if ( is.string( component ) ) return factory.text( component )
  if ( is.node( component ) ) return component
  if ( is.nodelist( component ) ) return factory.nodelist( component )
  if ( is.array( component ) ) return factory.array( component )
  if ( is.promise( component ) ) return factory.promise( component )
  if ( is.object( component ) ) return factory.object( component )
  if ( is.class( component ) ) return factory.class( component )
  if ( is.tag( component ) ) return factory.tag( component )
  if ( is.function( component ) ) return factory.function( component )
  if ( is.undefined( component ) ) factory.undefined()
  return factory.text( component )

}
