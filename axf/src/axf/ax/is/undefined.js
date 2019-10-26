/**
 * Type Is Undefined Checker.
 * Determines whether variable is undefined.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.undefined = function ( variable ) {
  // debugger
  // return typeof variable == 'undefined'
  return variable === void 0
}
