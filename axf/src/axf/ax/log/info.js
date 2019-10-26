/**
 * Log an info message.
 *
 * @since 0.0.0
 * @namespace ax.log.info
 *
 * @param {string} message
 *
 */
ax.log.info = ( ...args ) => {
  console.info.bind( console )( ...args )
}
