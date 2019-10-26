/**
 * Type Is NodeList Checker.
 * Determines whether variable is an HTML node list.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.nodelist = function ( variable ) {
  return variable instanceof NodeList
}
