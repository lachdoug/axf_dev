/**
 * Log a message.
 *
 * @since 0.0.0
 * @namespace ax.log
 *
 * @param {string} message
 *
 */
ax.log = ( ...args ) => {
  console.log.bind( console )( ...args )
  return null
}
