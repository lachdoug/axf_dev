/**
 * Log a warning.
 *
 * @since 0.0.0
 * @namespace ax.log.warn
 *
 * @param {string} message
 *
 */
ax.log.warn = ( ...args ) => {
  console.warn.bind( console )( ...args )
}
