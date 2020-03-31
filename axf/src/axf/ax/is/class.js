/**
 * Type Is Class Checker.
 * Determines whether value is a class.
 *
 * @since 0.0.0
 *
 * @param value
 *
 * @return {boolean}
 *
 */
ax.is.class = function ( value ) {
  return this.function( value ) && ( '' + value ).slice(0,5) === 'class'
}
