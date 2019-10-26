/**
 * Log an error message.
 *
 * @since 0.0.0
 * @namespace ax.log.error
 *
 * @param {string} message
 *
 */
ax.log.error = ( ...args ) => {
  console.error.bind( console )( ...args )
}
