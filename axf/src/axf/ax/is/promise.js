/**
 * Type Is Promise Checker.
 * Determines whether value is a Promise.
 *
 * @since 0.0.0
 *
 * @param value
 *
 * @return {boolean}
 *
 */
ax.is.promise = function ( value ) {
  return value instanceof Promise
}
