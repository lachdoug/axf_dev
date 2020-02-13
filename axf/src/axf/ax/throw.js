/**
 * Throw an error.
 *
 * @since 0.0.0
 * @namespace ax
 *
 * @param {string} message
 *
 */
ax.throw = function( ...args ) {
  throw new Error( args )
}
