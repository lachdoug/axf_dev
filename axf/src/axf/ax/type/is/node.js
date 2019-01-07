/**
 * Type Is Node Checker.
 * Determines whether variable is an HTML node.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.type.is.node = function ( variable ) {
  return variable instanceof Node
}
