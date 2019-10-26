/**
 * Throw an error.
 *
 * @since 0.0.0
 * @namespace ax.log.error
 *
 * @param {string} message
 *
 */
ax.throw = function( ...args ) {
  throw new Error( args )
}
