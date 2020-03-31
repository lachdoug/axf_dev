/**
 * Type Is Node Checker.
 * Determines whether value is an HTML node.
 *
 * @since 0.0.0
 *
 * @param value
 *
 * @return {boolean}
 *
 */
ax.is.node = function ( value ) {
  return value instanceof Node
}
