/**
 * Type Is Class Checker.
 * Determines whether variable is a class.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.type.is.class = function ( variable ) {
  return this.function( variable ) && ( '' + variable ).slice(0,5) === 'class'
}
