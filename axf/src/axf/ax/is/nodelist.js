/**
 * Type Is NodeList Checker.
 * Determines whether value is an HTML node list.
 *
 * @since 0.0.0
 *
 * @param value
 *
 * @return {boolean}
 *
 */
ax.is.nodelist = function ( value ) {
  return value instanceof NodeList
}
