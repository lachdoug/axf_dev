/**
 * Type Is Tag Checker.
 * Determines whether value is a Tag Generator Proxy function.
 *
 * @since 0.0.0
 *
 * @param value
 *
 * @return {boolean}
 *
 */
ax.is.tag = function ( value ) {
  return '' + ax.a.tagProxyFunction === '' + value
}
