/**
 * Type Is Tag Checker.
 * Determines whether variable is a Tag Generator Proxy function.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.type.is.tag = function ( variable ) {
  return '' + ax.a.tagProxyFunction === '' + variable
}
