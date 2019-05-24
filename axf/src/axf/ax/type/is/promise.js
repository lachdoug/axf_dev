/**
 * Type Is Promise Checker.
 * Determines whether variable is a Promise.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.type.is.promise = function ( variable ) {
  return variable instanceof Promise
  // Promise.resolve( variable ) === variable
}
